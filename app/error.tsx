'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
          <div className="text-6xl mb-4">⚠️</div>
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Don't worry, our team has been notified and we're
          working on a fix.
        </p>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-gray-100 rounded-lg text-left max-w-2xl mx-auto">
            <p className="text-sm font-mono text-gray-800 break-all">{error.message}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:shadow-lg transition-all"
          >
            <RefreshCcw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-base font-semibold hover:bg-purple-50 transition-all"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            If this problem persists, please{' '}
            <a
              href="mailto:support@intelligenttools.co"
              className="text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
