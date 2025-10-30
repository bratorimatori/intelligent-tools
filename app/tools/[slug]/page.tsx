'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, TrendingUp, ArrowUpCircle, Clock, DollarSign, Tag, ArrowLeft, Sparkles } from 'lucide-react';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function ToolDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [tool, setTool] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const [relatedTools, setRelatedTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const supabase = createClient();

      // Fetch tool
      const { data: toolData, error: toolError } = await supabase
        .from('tools')
        .select(`
          *,
          category:tool_categories(id, name, slug)
        `)
        .eq('slug', slug)
        .single();

      if (toolError || !toolData) {
        notFound();
        return;
      }

      setTool(toolData);
      setCategory(toolData.category);

      // Fetch related tools (same category, exclude current)
      if (toolData.category?.id) {
        const { data: relatedData } = await supabase
          .from('tools')
          .select('*')
          .eq('category_id', toolData.category.id)
          .neq('id', toolData.id)
          .limit(3);

        if (relatedData) setRelatedTools(relatedData);
      }

      setLoading(false);
    }

    fetchData();
  }, [slug]);

  // Format pricing display
  const getPricingDisplay = () => {
    if (!tool) return '';
    if (tool.pricing_type === 'free') return 'Free';
    if (tool.pricing_type === 'open_source') return 'Open Source';
    if (tool.price_from !== undefined && tool.price_to !== undefined) {
      return `$${tool.price_from} - $${tool.price_to}/mo`;
    }
    return tool.pricing_info || 'See pricing';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
        <div className="text-center">
          <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>Loading...</div>
        </div>
      </div>
    );
  }

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 transition-colors"
          style={{ color: 'var(--text-secondary)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to all tools</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Tool Icon */}
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0" style={{
              background: 'var(--surface-secondary)',
              border: '1px solid var(--border-subtle)'
            }}>
              <span className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {tool.name.charAt(0)}
              </span>
            </div>

            {/* Tool Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {tool.featured && (
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium" style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    color: 'var(--warning)'
                  }}>
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                )}
                {category && (
                  <Link
                    href={`/tools?category=${category.id}`}
                    className="text-xs px-3 py-1 rounded-full font-medium transition-colors"
                    style={{
                      background: 'var(--surface-secondary)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {category.name}
                  </Link>
                )}
                {tool.pricing_type && (
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={
                    tool.pricing_type === 'free' ? {
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: 'var(--success)'
                    } : tool.pricing_type === 'freemium' ? {
                      background: 'var(--surface-secondary)',
                      color: 'var(--text-secondary)'
                    } : {
                      background: 'rgba(245, 158, 11, 0.1)',
                      color: 'var(--warning)'
                    }
                  }>
                    {tool.pricing_type.charAt(0).toUpperCase() + tool.pricing_type.slice(1)}
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em'
              }}>
                {tool.name}
              </h1>

              {tool.tagline && (
                <p className="text-xl mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {tool.tagline}
                </p>
              )}

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-8" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm">
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{tool.upvotes}</span> upvotes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpCircle className="w-5 h-5" />
                  <span className="text-sm">
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{tool.view_count?.toLocaleString() || 0}</span> views
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">
                    Added {new Date(tool.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={tool.affiliate_url || tool.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all"
                  style={{
                    background: 'var(--accent-primary)',
                    color: 'var(--background)'
                  }}
                >
                  Visit Website
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-colors" style={{
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text-primary)',
                  background: 'transparent'
                }}>
                  <ArrowUpCircle className="w-5 h-5" />
                  Upvote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}>About {tool.name}</h2>
              {tool.long_description ? (
                <div className="prose prose-lg max-w-none">
                  {tool.long_description.split('\n\n').map((paragraph, index) => {
                    // Handle headings
                    if (paragraph.startsWith('Key Features:')) {
                      return (
                        <div key={index}>
                          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--text-primary)' }}>Key Features</h3>
                        </div>
                      );
                    }
                    if (paragraph.startsWith('Perfect for:')) {
                      return (
                        <div key={index}>
                          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--text-primary)' }}>Perfect for</h3>
                        </div>
                      );
                    }
                    // Handle bullet points
                    if (paragraph.startsWith('-')) {
                      const items = paragraph.split('\n').filter(line => line.trim());
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--text-secondary)' }}>
                          {items.map((item, i) => (
                            <li key={i}>{item.replace(/^-\s*/, '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    // Regular paragraphs
                    return (
                      <p key={index} className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {tool.description}
                </p>
              )}
            </section>

            {/* Tags */}
            {tool.tags && tool.tags.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em'
                }}>
                  <Tag className="w-6 h-6" />
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      style={{
                        background: 'var(--surface-secondary)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="rounded-xl p-6" style={{
              background: 'var(--surface-primary)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Pricing</h3>
              </div>
              <p className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {getPricingDisplay()}
              </p>
              {tool.pricing_info && (
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {tool.pricing_info}
                </p>
              )}
            </div>

            {/* Quick Info */}
            <div className="rounded-xl p-6" style={{
              background: 'var(--surface-primary)',
              border: '1px solid var(--border-subtle)'
            }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Quick Info</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-tertiary)' }}>Category</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {category ? category.name : 'Uncategorized'}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-tertiary)' }}>Website</p>
                  <a
                    href={tool.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium break-all"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {tool.website_url.replace(/^https?:\/\//, '')}
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-tertiary)' }}>Added</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {new Date(tool.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6" style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>Similar Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((relatedTool) => (
                <Link
                  key={relatedTool.id}
                  href={`/tools/${relatedTool.slug}`}
                  className="group rounded-xl p-6 transition-all"
                  style={{
                    background: 'var(--surface-primary)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                      background: 'var(--surface-secondary)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        {relatedTool.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold transition-colors truncate" style={{ color: 'var(--text-primary)' }}>
                        {relatedTool.name}
                      </h3>
                      {relatedTool.tagline && (
                        <p className="text-sm line-clamp-1" style={{ color: 'var(--text-tertiary)' }}>
                          {relatedTool.tagline}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm line-clamp-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {relatedTool.description}
                  </p>
                  <div className="flex items-center gap-2">
                    {relatedTool.pricing_type && (
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={
                        relatedTool.pricing_type === 'free' ? {
                          background: 'rgba(16, 185, 129, 0.1)',
                          color: 'var(--success)'
                        } : relatedTool.pricing_type === 'freemium' ? {
                          background: 'var(--surface-secondary)',
                          color: 'var(--text-secondary)'
                        } : {
                          background: 'rgba(245, 158, 11, 0.1)',
                          color: 'var(--warning)'
                        }
                      }>
                        {relatedTool.pricing_type.charAt(0).toUpperCase() + relatedTool.pricing_type.slice(1)}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
