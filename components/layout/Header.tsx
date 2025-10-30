'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{
      background: 'var(--surface-primary)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      {/* Main Header */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform" style={{
              background: 'var(--surface-tertiary)',
              border: '1px solid var(--border-subtle)'
            }}>
              <Sparkles className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
            </div>
            <span className="text-base font-bold" style={{
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em'
            }}>
              Intelligent Tools
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/tools"
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI Tools
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              Blog
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              Categories
            </Link>
            <Link
              href="/submit"
              className="text-sm font-semibold px-4 py-1.5 rounded-lg transition-all hover:bg-opacity-90"
              style={{
                background: 'var(--accent-primary)',
                color: 'var(--background)'
              }}
            >
              Submit Tool
            </Link>
          </nav>

          {/* Search Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg transition-colors"
              aria-label="Search"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-tertiary)' }} />
              <input
                type="search"
                placeholder="Search AI tools..."
                className="w-full pl-10 pr-4 py-2 rounded-lg text-sm"
                style={{
                  background: 'var(--surface-secondary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)'
                }}
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden" style={{
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--surface-primary)'
        }}>
          <nav className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col space-y-4">
            <Link
              href="/tools"
              className="text-base font-medium transition-colors py-2"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              AI Tools
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium transition-colors py-2"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/categories"
              className="text-base font-medium transition-colors py-2"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/submit"
              className="text-base font-semibold px-4 py-3 rounded-lg text-center transition-all hover:bg-opacity-90"
              style={{
                background: 'var(--accent-primary)',
                color: 'var(--background)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Tool
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
