'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Eye, ArrowLeft } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const supabase = createClient();

      // Fetch blog post
      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .select(`
          *,
          category:blog_categories(id, name, slug)
        `)
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (postError || !postData) {
        notFound();
        return;
      }

      setPost(postData);
      if (postData.category) {
        setCategory(postData.category);
      }

      setLoading(false);
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
        <div className="text-center">
          <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>Loading...</div>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  // Split content into paragraphs for better formatting
  const paragraphs = post.content?.split('\n\n') || [];

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to blog</span>
          </Link>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="mb-6">
            <Link
              href={`/blog?category=${category.id}`}
              className="text-xs px-3 py-1 rounded-full font-medium transition-colors inline-block"
              style={{
                background: 'var(--surface-secondary)',
                color: 'var(--text-primary)'
              }}
            >
              {category.name}
            </Link>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          lineHeight: '1.1'
        }}>
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
            {post.excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center gap-6 mb-12 pb-8" style={{
          borderBottom: '1px solid var(--border-subtle)',
          color: 'var(--text-secondary)'
        }}>
          {post.published_at && (
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" />
              <time>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm">
            <Eye className="w-4 h-4" />
            <span>{post.view_count?.toLocaleString() || 0} views</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, index) => {
            // Check if paragraph is a heading (starts with #)
            if (paragraph.startsWith('# ')) {
              const heading = paragraph.substring(2);
              return (
                <h2 key={index} className="text-3xl font-bold mt-12 mb-4" style={{
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em'
                }}>
                  {heading}
                </h2>
              );
            }

            if (paragraph.startsWith('## ')) {
              const heading = paragraph.substring(3);
              return (
                <h3 key={index} className="text-2xl font-bold mt-8 mb-3" style={{
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em'
                }}>
                  {heading}
                </h3>
              );
            }

            if (paragraph.startsWith('### ')) {
              const heading = paragraph.substring(4);
              return (
                <h4 key={index} className="text-xl font-bold mt-6 mb-2" style={{
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  {heading}
                </h4>
              );
            }

            // Check if it's a list (starts with -)
            if (paragraph.includes('\n-')) {
              const lines = paragraph.split('\n');
              const items = lines.filter(line => line.trim().startsWith('-')).map(line => line.replace(/^-\s*/, ''));
              return (
                <ul key={index} className="space-y-2 mb-6 ml-6 list-disc" style={{ color: 'var(--text-secondary)' }}>
                  {items.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            // Regular paragraph
            return (
              <p key={index} className="leading-relaxed mb-6 text-base" style={{ color: 'var(--text-secondary)' }}>
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Back to Blog */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-medium transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </article>

      {/* CTA Section */}
      <div className="py-16" style={{
        background: 'var(--surface-primary)',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4" style={{
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Discover More AI Tools
          </h3>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Explore our curated directory of AI tools to find the perfect solution for your needs.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all"
            style={{
              background: 'var(--accent-primary)',
              color: 'var(--background)'
            }}
          >
            Browse All Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
