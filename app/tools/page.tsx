'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function ToolsPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [tools, setTools] = useState<any[]>([]);
  const [toolCategories, setToolCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [showFilters, setShowFilters] = useState(false);

  // Fetch data from Supabase
  useEffect(() => {
    async function fetchData() {
      const supabase = createClient();

      const [toolsResult, categoriesResult] = await Promise.all([
        supabase
          .from('tools')
          .select(`
            *,
            category:tool_categories(name, slug)
          `)
          .order('upvotes', { ascending: false }),
        supabase
          .from('tool_categories')
          .select('*')
          .order('name')
      ]);

      if (toolsResult.data) setTools(toolsResult.data);
      if (categoriesResult.data) setToolCategories(categoriesResult.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let filtered = [...tools];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.tagline?.toLowerCase().includes(query) ||
          tool.description?.toLowerCase().includes(query) ||
          tool.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      // Check if selectedCategory is a UUID (category_id) or a slug
      const isUUID = selectedCategory.length > 20 && selectedCategory.includes('-');
      filtered = filtered.filter((tool) =>
        isUUID
          ? tool.category_id === selectedCategory
          : tool.category?.slug === selectedCategory
      );
    }

    // Pricing filter
    if (selectedPricing !== 'all') {
      filtered = filtered.filter((tool) => tool.pricing_type === selectedPricing);
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.upvotes - a.upvotes);
        break;
      case 'views':
        filtered.sort((a, b) => b.view_count - a.view_count);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedPricing, sortBy]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Header Section */}
      <section style={{
        background: 'var(--surface-primary)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em'
            }}>
              Discover AI Tools
            </h1>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Browse {tools.length}+ AI tools across {toolCategories.length} categories.
              Find the perfect tool for your workflow.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-tertiary)' }} />
              <input
                type="text"
                placeholder="Search AI tools by name, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 text-base"
                style={{
                  background: 'var(--surface-secondary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="rounded-xl p-6 sticky top-24 space-y-6" style={{
              background: 'var(--surface-primary)',
              border: '1px solid var(--border-subtle)'
            }}>
              {/* Mobile Close Button */}
              <div className="lg:hidden flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  ✕
                </button>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>
                  Category
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
                      All Categories
                    </span>
                  </label>
                  {toolCategories.map((category) => (
                    <label key={category.id} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pricing Filter */}
              <div className="pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>
                  Pricing
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'All', value: 'all' },
                    { label: 'Free', value: 'free' },
                    { label: 'Freemium', value: 'freemium' },
                    { label: 'Paid', value: 'paid' },
                    { label: 'Open Source', value: 'open_source' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="pricing"
                        value={option.value}
                        checked={selectedPricing === option.value}
                        onChange={(e) => setSelectedPricing(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              {(selectedCategory !== 'all' || selectedPricing !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPricing('all');
                    setSearchQuery('');
                  }}
                  className="w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    background: 'transparent'
                  }}
                >
                  Reset Filters
                </button>
              )}
            </div>
          </aside>

          {/* Tools Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{filteredTools.length}</span> tools found
                </p>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus:ring-2"
                style={{
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--surface-primary)',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="popular">Most Popular</option>
                <option value="views">Most Viewed</option>
                <option value="newest">Newest</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.slug}`}
                  className="group rounded-xl p-6 transition-all"
                  style={{
                    background: 'var(--surface-primary)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {/* Tool Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{
                      background: 'var(--surface-secondary)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        {tool.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-1 truncate transition-colors" style={{ color: 'var(--text-primary)' }}>
                        {tool.name}
                      </h3>
                      {tool.tagline && (
                        <p className="text-sm line-clamp-1" style={{ color: 'var(--text-tertiary)' }}>
                          {tool.tagline}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tool Description */}
                  <p className="text-sm mb-4 line-clamp-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {tool.description}
                  </p>

                  {/* Tool Footer */}
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <div className="flex items-center gap-2 flex-wrap">
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
                          background: 'var(--surface-secondary)',
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
                      {tool.featured && (
                        <span className="text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1" style={{
                          background: 'rgba(245, 158, 11, 0.1)',
                          color: 'var(--warning)'
                        }}>
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      <TrendingUp className="w-3 h-3" />
                      {tool.upvotes}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredTools.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                  background: 'var(--surface-secondary)'
                }}>
                  <Search className="w-8 h-8" style={{ color: 'var(--text-tertiary)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>No tools found</h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPricing('all');
                    setSearchQuery('');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all"
                  style={{
                    background: 'var(--accent-primary)',
                    color: 'var(--background)'
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-16" style={{
        background: 'var(--surface-primary)',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <div className="max-w-[1400px] mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em'
          }}>
            Don't see your tool?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Submit your AI tool to our directory and reach thousands of users looking for the perfect AI solution.
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all"
            style={{
              background: 'var(--accent-primary)',
              color: 'var(--background)'
            }}
          >
            Submit Your Tool
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
