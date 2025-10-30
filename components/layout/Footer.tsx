import Link from 'next/link';
import { Twitter, Linkedin, Github, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20" style={{
      background: 'var(--surface-primary)',
      borderTop: '1px solid var(--border-subtle)'
    }}>
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{
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
            <p className="text-sm mb-6 max-w-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Discover and compare the best AI tools for your workflow. From writing assistants to image generators, find the perfect tool to boost your productivity.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://twitter.com"
                className="p-2 rounded-lg transition-all"
                style={{
                  background: 'var(--surface-secondary)',
                  border: '1px solid var(--border-subtle)'
                }}
                aria-label="Twitter"
              >
                <Twitter size={16} style={{ color: 'var(--text-secondary)' }} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2 rounded-lg transition-all"
                style={{
                  background: 'var(--surface-secondary)',
                  border: '1px solid var(--border-subtle)'
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} style={{ color: 'var(--text-secondary)' }} />
              </Link>
              <Link
                href="https://github.com"
                className="p-2 rounded-lg transition-all"
                style={{
                  background: 'var(--surface-secondary)',
                  border: '1px solid var(--border-subtle)'
                }}
                aria-label="GitHub"
              >
                <Github size={16} style={{ color: 'var(--text-secondary)' }} />
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
              AI Tools
            </h3>
            <ul className="space-y-2">
              <li><Link href="/tools" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Browse All</Link></li>
              <li><Link href="/tools?category=writing" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Writing Tools</Link></li>
              <li><Link href="/tools?category=image" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Image Generation</Link></li>
              <li><Link href="/tools?category=coding" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Code Generation</Link></li>
              <li><Link href="/submit" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Submit Tool</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
              Resources
            </h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Blog</Link></li>
              <li><Link href="/guides" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Guides</Link></li>
              <li><Link href="/comparisons" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Comparisons</Link></li>
              <li><Link href="/newsletter" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Newsletter</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
              Company
            </h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>About Us</Link></li>
              <li><Link href="/contact" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Contact</Link></li>
              <li><Link href="/privacy" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 pt-10" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="max-w-md">
            <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Stay Updated
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Get the latest AI tools and tips delivered to your inbox weekly.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg text-sm"
                style={{
                  background: 'var(--surface-secondary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)'
                }}
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-lg font-medium text-sm transition-all hover:bg-opacity-90"
                style={{
                  background: 'var(--accent-primary)',
                  color: 'var(--background)'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} Intelligent Tools. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            Made with ❤️ for the AI community
          </p>
        </div>
      </div>
    </footer>
  );
}
