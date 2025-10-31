import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Intelligent Tools Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Header */}
      <div style={{
        background: 'var(--surface-primary)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-medium mb-6 hover:underline transition-all"
            style={{ color: 'var(--accent-primary)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full"
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

            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: '1.1'
            }}>
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm" style={{
              color: 'var(--text-secondary)'
            }}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div
          className="prose prose-lg prose-invert max-w-none"
          style={{
            color: 'var(--text-secondary)'
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Back to Blog CTA */}
      <div className="max-w-4xl mx-auto px-6 py-12" style={{
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-medium hover:underline transition-all"
          style={{ color: 'var(--accent-primary)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>
      </div>
    </div>
  );
}
