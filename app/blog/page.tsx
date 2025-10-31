import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { getAllPosts, getAllTags } from '@/lib/blog';

export const metadata = {
  title: 'Blog - Intelligent Tools',
  description: 'Articles, guides, and insights about AI tools and automation',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Header */}
      <section className="py-20" style={{ background: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-10 h-10" style={{ color: 'var(--accent-primary)' }} />
            <h1 className="text-5xl font-bold" style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em'
            }}>
              Blog
            </h1>
          </div>
          <p className="text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Articles, guides, and insights about AI tools, automation, and productivity
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{
              color: 'var(--text-secondary)'
            }}>
              Browse by Topic
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag.toLowerCase()}`}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-opacity-80"
                  style={{
                    background: 'var(--surface-secondary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{
              background: 'var(--surface-secondary)'
            }}>
              <BookOpen className="w-8 h-8" style={{ color: 'var(--text-tertiary)' }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              No blog posts yet
            </h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Check back soon for articles and insights!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-medium hover:underline"
              style={{ color: 'var(--accent-primary)' }}
            >
              <ArrowRight className="w-4 h-4" />
              Explore AI Tools
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl transition-all overflow-hidden hover:scale-102"
                style={{
                  background: 'var(--surface-primary)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded"
                        style={{
                          background: 'var(--surface-secondary)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold mb-3 transition-colors" style={{
                    color: 'var(--text-primary)'
                  }}>
                    {post.title}
                  </h2>

                  <p className="mb-4 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm" style={{
                    color: 'var(--text-tertiary)'
                  }}>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4" style={{
                  background: 'var(--surface-secondary)',
                  borderTop: '1px solid var(--border-subtle)'
                }}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {post.author}
                    </span>
                    <span className="font-medium group-hover:gap-2 transition-all inline-flex items-center gap-1" style={{
                      color: 'var(--accent-primary)'
                    }}>
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
