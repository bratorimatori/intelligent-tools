'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import { tools as mockTools, toolCategories } from '@/lib/mockData';

export default function EditToolPage() {
  const params = useParams();
  const router = useRouter();
  const toolId = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    tagline: '',
    description: '',
    long_description: '',
    website_url: '',
    affiliate_url: '',
    logo_url: '',
    screenshot_url: '',
    category_id: '',
    pricing_type: 'freemium',
    price_from: '',
    price_to: '',
    pricing_info: '',
    featured: false,
    sponsored: false,
    tags: '',
  });

  // Load tool data
  useEffect(() => {
    async function loadTool() {
      try {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/tools/${toolId}`);
        // const { data } = await response.json();

        // For now, use mock data
        const tool = mockTools.find((t) => t.id === toolId);

        if (!tool) {
          setError('Tool not found');
          setIsLoading(false);
          return;
        }

        setFormData({
          name: tool.name || '',
          slug: tool.slug || '',
          tagline: tool.tagline || '',
          description: tool.description || '',
          long_description: tool.long_description || '',
          website_url: tool.website_url || '',
          affiliate_url: tool.affiliate_url || '',
          logo_url: tool.logo_url || '',
          screenshot_url: tool.screenshot_url || '',
          category_id: tool.category_id || '',
          pricing_type: tool.pricing_type || 'freemium',
          price_from: tool.price_from?.toString() || '',
          price_to: tool.price_to?.toString() || '',
          pricing_info: tool.pricing_info || '',
          featured: tool.featured || false,
          sponsored: tool.sponsored || false,
          tags: tool.tags?.join(', ') || '',
        });

        setIsLoading(false);
      } catch (err) {
        console.error('Error loading tool:', err);
        setError('Failed to load tool');
        setIsLoading(false);
      }
    }

    loadTool();
  }, [toolId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Prepare data
      const toolData = {
        ...formData,
        price_from: formData.price_from ? parseFloat(formData.price_from) : null,
        price_to: formData.price_to ? parseFloat(formData.price_to) : null,
        tags: formData.tags
          ? formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean)
          : [],
      };

      // Call API
      const response = await fetch(`/api/tools/${toolId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toolData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update tool');
      }

      const { data } = await response.json();

      // Redirect to tool detail page
      router.push(`/tools/${data.slug}`);
    } catch (err: any) {
      console.error('Error updating tool:', err);
      setError(err.message || 'Failed to update tool. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-purple-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading tool...</p>
        </div>
      </div>
    );
  }

  if (error && !formData.name) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link
            href="/admin/tools"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Back to Tools
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link
            href="/admin/tools"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Tools</span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900">Edit Tool: {formData.name}</h1>
        </div>
      </div>

      {/* Form - Using same structure as new tool page */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-8 space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tool Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="slug" className="block text-sm font-semibold text-gray-900 mb-2">
                    URL Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9-]+"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="tagline" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tagline
                  </label>
                  <input
                    type="text"
                    id="tagline"
                    name="tagline"
                    value={formData.tagline}
                    onChange={handleChange}
                    maxLength={100}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                    Short Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="long_description" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Description
                  </label>
                  <textarea
                    id="long_description"
                    name="long_description"
                    value={formData.long_description}
                    onChange={handleChange}
                    rows={10}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* URLs */}
            <div className="pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">URLs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="website_url" className="block text-sm font-semibold text-gray-900 mb-2">
                    Website URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    id="website_url"
                    name="website_url"
                    value={formData.website_url}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="affiliate_url" className="block text-sm font-semibold text-gray-900 mb-2">
                    Affiliate URL (Optional)
                  </label>
                  <input
                    type="url"
                    id="affiliate_url"
                    name="affiliate_url"
                    value={formData.affiliate_url}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="logo_url" className="block text-sm font-semibold text-gray-900 mb-2">
                    Logo URL (Optional)
                  </label>
                  <input
                    type="url"
                    id="logo_url"
                    name="logo_url"
                    value={formData.logo_url}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="screenshot_url" className="block text-sm font-semibold text-gray-900 mb-2">
                    Screenshot URL (Optional)
                  </label>
                  <input
                    type="url"
                    id="screenshot_url"
                    name="screenshot_url"
                    value={formData.screenshot_url}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Category & Pricing */}
            <div className="pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Category & Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category_id" className="block text-sm font-semibold text-gray-900 mb-2">
                    Category
                  </label>
                  <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a category</option>
                    {toolCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="pricing_type" className="block text-sm font-semibold text-gray-900 mb-2">
                    Pricing Model
                  </label>
                  <select
                    id="pricing_type"
                    name="pricing_type"
                    value={formData.pricing_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="free">Free</option>
                    <option value="freemium">Freemium</option>
                    <option value="paid">Paid</option>
                    <option value="open_source">Open Source</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="price_from" className="block text-sm font-semibold text-gray-900 mb-2">
                    Price From ($/month)
                  </label>
                  <input
                    type="number"
                    id="price_from"
                    name="price_from"
                    value={formData.price_from}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="price_to" className="block text-sm font-semibold text-gray-900 mb-2">
                    Price To ($/month)
                  </label>
                  <input
                    type="number"
                    id="price_to"
                    name="price_to"
                    value={formData.price_to}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="pricing_info" className="block text-sm font-semibold text-gray-900 mb-2">
                    Pricing Details
                  </label>
                  <input
                    type="text"
                    id="pricing_info"
                    name="pricing_info"
                    value={formData.pricing_info}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Tags & Status */}
            <div className="pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Tags & Status</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="tags" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="w-5 h-5 text-purple-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">Featured Tool</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="sponsored"
                      checked={formData.sponsored}
                      onChange={handleChange}
                      className="w-5 h-5 text-purple-600 rounded"
                    />
                    <span className="text-sm font-medium text-gray-900">Sponsored</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 rounded-b-xl flex items-center justify-between">
            <Link
              href="/admin/tools"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-white transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
