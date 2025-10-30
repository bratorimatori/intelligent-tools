'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, TrendingUp, Search, Filter } from 'lucide-react';
import { tools, toolCategories } from '@/lib/mockData';

export default function AdminToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  // Filter tools
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || tool.category_id === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDelete = (toolId: string) => {
    setSelectedTool(toolId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // TODO: Implement actual delete logic with Supabase
    console.log('Deleting tool:', selectedTool);
    setShowDeleteModal(false);
    setSelectedTool(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Tools</h1>
              <p className="text-gray-600">Add, edit, and manage AI tools in your directory</p>
            </div>
            <Link
              href="/admin/tools/new"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Add New Tool
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Tools</p>
                <p className="text-3xl font-bold text-gray-900">{tools.length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Featured</p>
                <p className="text-3xl font-bold text-gray-900">
                  {tools.filter((t) => t.featured).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Views</p>
                <p className="text-3xl font-bold text-gray-900">
                  {tools.reduce((sum, t) => sum + t.view_count, 0).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Clicks</p>
                <p className="text-3xl font-bold text-gray-900">
                  {tools.reduce((sum, t) => sum + t.click_count, 0).toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none bg-white min-w-[200px]"
              >
                <option value="all">All Categories</option>
                {toolCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredTools.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{tools.length}</span> tools
          </div>
        </div>

        {/* Tools Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tool
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Pricing
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Stats
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTools.map((tool) => {
                  const category = toolCategories.find((c) => c.id === tool.category_id);
                  return (
                    <tr key={tool.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-purple-600">
                              {tool.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{tool.name}</div>
                            <div className="text-sm text-gray-500 line-clamp-1">
                              {tool.tagline}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">
                          {category?.name || 'Uncategorized'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            tool.pricing_type === 'free'
                              ? 'bg-green-100 text-green-700'
                              : tool.pricing_type === 'freemium'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-purple-100 text-purple-700'
                          }`}
                        >
                          {tool.pricing_type?.charAt(0).toUpperCase() +
                            tool.pricing_type?.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {tool.upvotes} upvotes
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {tool.view_count} views
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          {tool.featured && (
                            <span className="inline-flex w-fit px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
                              Featured
                            </span>
                          )}
                          {tool.sponsored && (
                            <span className="inline-flex w-fit px-2 py-1 text-xs font-medium bg-pink-100 text-pink-700 rounded-full">
                              Sponsored
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/tools/${tool.slug}`}
                            target="_blank"
                            className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                            title="View"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`/admin/tools/edit/${tool.id}`}
                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(tool.id)}
                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No tools found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Tool?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this tool? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
