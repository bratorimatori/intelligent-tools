import Link from 'next/link';
import { TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = await createClient();

  // Get featured tools
  const { data: featuredTools } = await supabase
    .from('tools')
    .select(`
      *,
      category:tool_categories(name, slug)
    `)
    .eq('featured', true)
    .order('upvotes', { ascending: false })
    .limit(6);

  // Get tool categories
  const { data: toolCategories } = await supabase
    .from('tool_categories')
    .select('*')
    .order('name');

  // Get recent blog posts
  const { data: recentPosts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(3);

  const toolsCount = featuredTools?.length || 0;
  const categoriesCount = toolCategories?.length || 0;

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{
        background: 'var(--background)'
      }}>
        <div className="relative max-w-[1100px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 text-xs font-medium" style={{
            background: 'var(--surface-secondary)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)'
          }}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover the best AI tools in 2025</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            Find The Perfect AI Tool
            <br />
            For Every Task
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{
            color: 'var(--text-secondary)'
          }}>
            Curated directory of AI tools. From writing assistants to image generators,
            find the perfect tool to boost your productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-opacity-90"
              style={{
                background: 'var(--accent-primary)',
                color: 'var(--background)'
              }}
            >
              Browse All Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-opacity-10"
              style={{
                border: '1px solid var(--border-strong)',
                color: 'var(--text-primary)',
                background: 'transparent'
              }}
            >
              Read Reviews
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16 pt-12" style={{
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {toolsCount}+
              </div>
              <div className="text-sm mt-1" style={{ color: 'var(--text-tertiary)' }}>AI Tools</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {categoriesCount}
              </div>
              <div className="text-sm mt-1" style={{ color: 'var(--text-tertiary)' }}>Categories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                24/7
              </div>
              <div className="text-sm mt-1" style={{ color: 'var(--text-tertiary)' }}>Updated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden flex items-center justify-center" style={{
          border: '1px solid var(--border-subtle)',
          background: 'linear-gradient(135deg, var(--surface-secondary) 0%, var(--surface-tertiary) 100%)'
        }}>
          <img
            src="https://iatkdgqfrmiixrehawqv.supabase.co/storage/v1/object/public/website_images/hero-background-wide.jpg"
            alt="AI Tools Hero"
            className="w-full h-full object-cover"
            style={{ opacity: 0.8 }}
          />
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <TrendingUp className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
          <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Featured AI Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTools?.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="group rounded-lg p-5 transition-all hover:bg-opacity-80"
              style={{
                background: 'var(--surface-primary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {/* Tool Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                  background: 'var(--surface-secondary)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    {tool.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold truncate transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {tool.name}
                  </h3>
                  <p className="text-xs line-clamp-1" style={{ color: 'var(--text-tertiary)' }}>
                    {tool.tagline}
                  </p>
                </div>
              </div>

              {/* Tool Description */}
              <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {tool.description}
              </p>

              {/* Tool Footer */}
              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <div className="flex items-center gap-2">
                  {tool.pricing_type === 'free' && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: 'var(--success)'
                    }}>
                      Free
                    </span>
                  )}
                  {tool.pricing_type === 'freemium' && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{
                      background: 'var(--surface-secondary)',
                      color: 'var(--text-secondary)'
                    }}>
                      Freemium
                    </span>
                  )}
                  {tool.pricing_type === 'paid' && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{
                      background: 'rgba(245, 158, 11, 0.1)',
                      color: 'var(--warning)'
                    }}>
                      Paid
                    </span>
                  )}
                </div>
                <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-tertiary)' }}>
                  <TrendingUp className="w-3 h-3" />
                  {tool.upvotes}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 font-semibold group text-sm transition-colors hover:opacity-80"
            style={{ color: 'var(--text-primary)' }}
          >
            View All Tools
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20" style={{ background: 'var(--surface-primary)' }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Browse by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {toolCategories?.map((category) => (
              <Link
                key={category.slug}
                href={`/tools?category=${category.slug}`}
                className="group rounded-lg p-4 transition-all text-center hover:bg-opacity-80"
                style={{
                  background: 'var(--surface-secondary)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 transition-transform group-hover:scale-105" style={{
                  background: 'var(--surface-tertiary)'
                }}>
                  <span className="text-xl">
                    {category.icon === 'PenTool' && '✍️'}
                    {category.icon === 'Image' && '🎨'}
                    {category.icon === 'Code' && '💻'}
                    {category.icon === 'Zap' && '⚡'}
                    {category.icon === 'Video' && '🎥'}
                    {category.icon === 'Mic' && '🎙️'}
                  </span>
                </div>
                <h3 className="font-semibold text-xs mb-1 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {category.name}
                </h3>
                <p className="text-xs line-clamp-2" style={{ color: 'var(--text-tertiary)' }}>
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="max-w-[1100px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10" style={{
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em'
        }}>
          Latest Guides & Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentPosts?.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group"
            >
              {/* Featured Image Placeholder */}
              <div className="aspect-[16/9] mb-4 rounded-lg overflow-hidden" style={{
                background: 'var(--surface-secondary)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div className="w-full h-full flex items-center justify-center text-3xl" style={{
                  color: 'var(--text-tertiary)'
                }}>
                  📝
                </div>
              </div>

              {/* Post Content */}
              <div className="space-y-2">
                <h3 className="text-base font-semibold transition-colors line-clamp-2" style={{
                  color: 'var(--text-primary)'
                }}>
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-sm line-clamp-2 leading-relaxed" style={{
                    color: 'var(--text-secondary)'
                  }}>
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-3 text-xs pt-2" style={{ color: 'var(--text-tertiary)' }}>
                  <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Recent'}</span>
                  <span>•</span>
                  <span>{post.view_count || 0} views</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold group text-sm transition-colors hover:opacity-80"
            style={{ color: 'var(--text-primary)' }}
          >
            Read More Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{
        background: 'var(--surface-primary)',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Submit Your AI Tool
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{
            color: 'var(--text-secondary)'
          }}>
            Have an AI tool you'd like to share? Submit it to our directory and reach thousands of users looking for the perfect AI solution.
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-opacity-90"
            style={{
              background: 'var(--accent-primary)',
              color: 'var(--background)'
            }}
          >
            Submit Your Tool
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
