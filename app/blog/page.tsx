'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { Calendar, Eye, ArrowRight, BookOpen } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [blogCategories, setBlogCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Fetch data from Supabase
  useEffect(() => {
    async function fetchData() {
      const supabase = createClient();

      const [postsResult, categoriesResult] = await Promise.all([
        supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('published_at', { ascending: false }),
        supabase
          .from('blog_categories')
          .select('*')
          .order('name')
      ]);

      if (postsResult.data) setBlogPosts(postsResult.data);
      if (categoriesResult.data) setBlogCategories(categoriesResult.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category_id === selectedCategory);
  }, [selectedCategory, blogPosts]);

  // Sort by published date (newest first)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) =>
      new Date(b.published_at || '').getTime() - new Date(a.published_at || '').getTime()
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
        <div className="text-center">
          <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Header Section */}
      <section className="py-20" style={{ background: 'var(--surface-primary)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm" style={{
              background: 'var(--surface-secondary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)'
            }}>
              <BookOpen className="w-4 h-4" />
              <span>AI Tools Blog</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em'
            }}>
              Guides, Reviews & AI Insights
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              In-depth reviews, comparisons, and guides to help you choose the right AI tools for
              your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40" style={{
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--surface-primary)'
      }}>
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all`}
              style={selectedCategory === 'all' ? {
                background: 'var(--accent-primary)',
                color: 'var(--background)'
              } : {
                background: 'var(--surface-secondary)',
                color: 'var(--text-secondary)'
              }}
            >
              All Posts
            </button>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all`}
                style={selectedCategory === category.id ? {
                  background: 'var(--accent-primary)',
                  color: 'var(--background)'
                } : {
                  background: 'var(--surface-secondary)',
                  color: 'var(--text-secondary)'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="mb-6">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{sortedPosts.length}</span> articles
          </p>
        </div>

        {/* Featured Post (First Post) */}
        {sortedPosts.length > 0 && (
          <Link
            href={`/blog/post/${sortedPosts[0].slug}`}
            className="block mb-12 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl p-8 transition-all" style={{
              background: 'var(--surface-primary)',
              border: '1px solid var(--border-subtle)'
            }}>
              {/* Featured Image Placeholder */}
              <div className="aspect-[16/10] rounded-xl overflow-hidden flex items-center justify-center" style={{
                background: 'var(--surface-secondary)',
                border: '1px solid var(--border-subtle)'
              }}>
                <span className="text-6xl">📝</span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium w-fit mb-4" style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  color: 'var(--warning)'
                }}>
                  <span>⭐</span>
                  <span>Featured Post</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-colors" style={{
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em'
                }}>
                  {sortedPosts[0].title}
                </h2>

                {sortedPosts[0].excerpt && (
                  <p className="text-lg mb-6 line-clamp-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {sortedPosts[0].excerpt}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(sortedPosts[0].published_at || '').toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{sortedPosts[0].view_count.toLocaleString()} views</span>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all" style={{ color: 'var(--text-primary)' }}>
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Rest of Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/post/${post.slug}`}
              className="group"
            >
              {/* Featured Image Placeholder */}
              <div className="aspect-[16/9] mb-4 rounded-xl overflow-hidden flex items-center justify-center" style={{
                background: 'var(--surface-secondary)',
                border: '1px solid var(--border-subtle)'
              }}>
                <span className="text-5xl">📝</span>
              </div>

              {/* Post Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold transition-colors line-clamp-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-sm line-clamp-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-4 text-xs pt-2" style={{ color: 'var(--text-tertiary)' }}>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {new Date(post.published_at || '').toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{post.view_count} views</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
              background: 'var(--surface-secondary)'
            }}>
              <BookOpen className="w-8 h-8" style={{ color: 'var(--text-tertiary)' }} />
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>No posts found</h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              We haven't published any posts in this category yet.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors"
              style={{
                background: 'var(--accent-primary)',
                color: 'var(--background)'
              }}
            >
              View All Posts
            </button>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="py-16" style={{
        background: 'var(--surface-primary)',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Stay Updated with AI Tools
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Get the latest AI tool reviews, comparisons, and guides delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2"
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'var(--surface-secondary)',
                color: 'var(--text-primary)'
              }}
            />
            <button className="px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap" style={{
              background: 'var(--accent-primary)',
              color: 'var(--background)'
            }}>
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--text-tertiary)' }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
