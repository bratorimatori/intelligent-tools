'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function CategoriesPage() {
  const [toolCategories, setToolCategories] = useState<any[]>([]);
  const [tools, setTools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Supabase
  useEffect(() => {
    async function fetchData() {
      const supabase = createClient();

      const [categoriesResult, toolsResult] = await Promise.all([
        supabase
          .from('tool_categories')
          .select('*')
          .order('name'),
        supabase
          .from('tools')
          .select(`
            *,
            category:tool_categories(id, slug)
          `)
      ]);

      if (categoriesResult.data) setToolCategories(categoriesResult.data);
      if (toolsResult.data) setTools(toolsResult.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  // Count tools per category
  const categoriesWithCounts = toolCategories.map((category) => ({
    ...category,
    toolCount: tools.filter((tool) => tool.category?.id === category.id).length,
  }));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
        <div className="text-center">
          <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>Loading...</div>
        </div>
      </div>
    );
  }

  // Get icon emoji based on icon name
  const getIconEmoji = (icon?: string) => {
    const iconMap: Record<string, string> = {
      PenTool: '✍️',
      Image: '🎨',
      Code: '💻',
      Zap: '⚡',
      Video: '🎥',
      Mic: '🎙️',
    };
    return icon ? iconMap[icon] || '🔧' : '🔧';
  };

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
              <Layers className="w-4 h-4" />
              <span>Browse by Category</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em'
            }}>
              Explore AI Tools by Category
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Discover AI tools organized by their primary function. From writing assistants to
              image generators, find exactly what you need.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mt-12 pt-12" style={{
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div>
                <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{toolCategories.length}</div>
                <div className="text-sm mt-1" style={{ color: 'var(--text-tertiary)' }}>Categories</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{tools.length}+</div>
                <div className="text-sm mt-1" style={{ color: 'var(--text-tertiary)' }}>Total Tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesWithCounts.map((category) => (
            <Link
              key={category.id}
              href={`/tools?category=${category.id}`}
              className="group rounded-2xl p-8 transition-all"
              style={{
                background: 'var(--surface-primary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{
                background: 'var(--surface-secondary)',
                border: '1px solid var(--border-subtle)'
              }}>
                <span className="text-3xl">{getIconEmoji(category.icon)}</span>
              </div>

              {/* Category Info */}
              <h3 className="text-2xl font-bold mb-3 transition-colors" style={{
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}>
                {category.name}
              </h3>

              {category.description && (
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {category.description}
                </p>
              )}

              {/* Tool Count */}
              <div className="flex items-center justify-between pt-6" style={{
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  <Layers className="w-4 h-4" />
                  <span>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{category.toolCount}</span> tools
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" style={{ color: 'var(--text-tertiary)' }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools by Category Section */}
      <section className="py-16" style={{ background: 'var(--surface-primary)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Popular Tools by Category
          </h2>

          <div className="space-y-12">
            {categoriesWithCounts
              .filter((cat) => cat.toolCount > 0)
              .slice(0, 3)
              .map((category) => {
                const categoryTools = tools
                  .filter((tool) => tool.category?.id === category.id)
                  .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
                  .slice(0, 3);

                return (
                  <div key={category.id}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{getIconEmoji(category.icon)}</span>
                        <h3 className="text-2xl font-bold" style={{
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.02em'
                        }}>{category.name}</h3>
                      </div>
                      <Link
                        href={`/tools?category=${category.id}`}
                        className="font-medium text-sm flex items-center gap-1 group"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {categoryTools.map((tool) => (
                        <Link
                          key={tool.id}
                          href={`/tools/${tool.slug}`}
                          className="rounded-xl p-6 transition-all group"
                          style={{
                            background: 'var(--surface-secondary)',
                            border: '1px solid var(--border-subtle)'
                          }}
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                              background: 'var(--surface-tertiary)',
                              border: '1px solid var(--border-subtle)'
                            }}>
                              <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                                {tool.name.charAt(0)}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold transition-colors truncate mb-1" style={{ color: 'var(--text-primary)' }}>
                                {tool.name}
                              </h4>
                              {tool.tagline && (
                                <p className="text-sm line-clamp-1" style={{ color: 'var(--text-tertiary)' }}>
                                  {tool.tagline}
                                </p>
                              )}
                            </div>
                          </div>

                          <p className="text-sm line-clamp-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
                            {tool.description}
                          </p>

                          <div className="flex items-center gap-2">
                            {tool.pricing_type === 'free' && (
                              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{
                                background: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--success)'
                              }}>
                                Free
                              </span>
                            )}
                            {tool.pricing_type === 'freemium' && (
                              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{
                                background: 'var(--surface-tertiary)',
                                color: 'var(--text-secondary)'
                              }}>
                                Freemium
                              </span>
                            )}
                            {tool.pricing_type === 'paid' && (
                              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{
                                background: 'rgba(245, 158, 11, 0.1)',
                                color: 'var(--warning)'
                              }}>
                                Paid
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{
        background: 'var(--background)',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Submit your AI tool to our directory or suggest a new category
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all"
              style={{
                background: 'var(--accent-primary)',
                color: 'var(--background)'
              }}
            >
              Submit Your Tool
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all"
              style={{
                border: '1px solid var(--border-strong)',
                color: 'var(--text-primary)',
                background: 'transparent'
              }}
            >
              Browse All Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
