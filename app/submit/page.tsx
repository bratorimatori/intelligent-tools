'use client';

import { useState } from 'react';
import { ArrowLeft, Send, CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { toolCategories } from '@/lib/mockData';

export default function SubmitToolPage() {
  const [formData, setFormData] = useState({
    name: '',
    website_url: '',
    tagline: '',
    description: '',
    category_id: '',
    pricing_type: 'freemium',
    price_from: '',
    price_to: '',
    submitter_email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // TODO: Replace with actual API call to Supabase
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate success
      console.log('Tool submission:', formData);
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit tool. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Submission Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for submitting your AI tool. We'll review it and get back to you within 2-3
            business days.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Browse AI Tools
            </Link>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  website_url: '',
                  tagline: '',
                  description: '',
                  category_id: '',
                  pricing_type: 'freemium',
                  price_from: '',
                  price_to: '',
                  submitter_email: '',
                });
              }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Submit Another Tool
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to home</span>
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">List Your Tool</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Submit Your AI Tool</h1>
            <p className="text-lg text-gray-600">
              Share your AI tool with thousands of users looking for the perfect solution
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tool Name */}
            <div>
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
                placeholder="e.g., ChatGPT, Midjourney"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Website URL */}
            <div>
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
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Tagline */}
            <div>
              <label htmlFor="tagline" className="block text-sm font-semibold text-gray-900 mb-2">
                Tagline <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                required
                placeholder="Short description in one sentence"
                maxLength={100}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.tagline.length}/100 characters
              </p>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe what your tool does, its key features, and who it's for..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum 100 characters
              </p>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category_id" className="block text-sm font-semibold text-gray-900 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category_id"
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                {toolCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Pricing Type */}
            <div>
              <label htmlFor="pricing_type" className="block text-sm font-semibold text-gray-900 mb-2">
                Pricing Model <span className="text-red-500">*</span>
              </label>
              <select
                id="pricing_type"
                name="pricing_type"
                value={formData.pricing_type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="free">Free</option>
                <option value="freemium">Freemium (Free + Paid Plans)</option>
                <option value="paid">Paid Only</option>
                <option value="open_source">Open Source</option>
              </select>
            </div>

            {/* Pricing Range */}
            {formData.pricing_type !== 'free' && formData.pricing_type !== 'open_source' && (
              <div className="grid grid-cols-2 gap-4">
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
                    placeholder="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    placeholder="99"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Submitter Email */}
            <div>
              <label htmlFor="submitter_email" className="block text-sm font-semibold text-gray-900 mb-2">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="submitter_email"
                name="submitter_email"
                value={formData.submitter_email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                We'll contact you at this email when your tool is reviewed
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Tool for Review
                  </>
                )}
              </button>
              <p className="text-xs text-center text-gray-500 mt-3">
                By submitting, you agree that the information provided is accurate
              </p>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens next?</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>We'll review your submission within 2-3 business days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>If approved, your tool will be added to our directory</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>We'll notify you via email once it's live</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>Want to be featured? Contact us about sponsored listings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
