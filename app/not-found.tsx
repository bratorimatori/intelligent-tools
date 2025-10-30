import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            404
          </div>
          <div className="flex items-center justify-center gap-4 text-6xl">
            <span>🤖</span>
            <span>🔍</span>
            <span>❓</span>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved or deleted, or the
          URL might be incorrect.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:shadow-lg transition-all"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-base font-semibold hover:bg-purple-50 transition-all"
          >
            <Search className="w-5 h-5" />
            Browse AI Tools
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/categories"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              Categories
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/blog"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              Blog
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/submit"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              Submit Tool
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
