'use client'

import { useState, useEffect } from 'react'

// ─── Navbar ──────────────────────────────────────────────────────────────
// Sticky navigation that transitions from transparent to solid dark on scroll.
// Mobile: hamburger menu. Desktop: inline links + CTA button.

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Vision', href: '#vision' },
  { label: 'Technology', href: '#technology' },
  { label: 'Company', href: '#founder' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        style={{ height: '64px' }}
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <a href="/" className="flex items-center gap-2 group" aria-label="Jabon Labs home">
          {/* SVG Logo mark — replace with actual SVG logo file when available */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
            className="transition-transform group-hover:scale-110 duration-200"
          >
            <rect width="28" height="28" rx="6" fill="url(#logoGrad)" />
            <path d="M7 14L14 7L21 14L14 21L7 14Z" stroke="#050510" strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="14" r="3" fill="#050510" />
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00C8FF" />
                <stop offset="1" stopColor="#7B61FF" />
              </linearGradient>
            </defs>
          </svg>
          <span
            className="text-text-primary font-heading font-semibold text-lg tracking-tight"
          >
            Jabon Labs
          </span>
        </a>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <a
          href="#waitlist"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-primary text-background font-heading font-semibold text-sm hover:bg-primary-dark transition-colors duration-200 cursor-pointer shadow-glow-cyan"
        >
          Get Early Access
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-card border-b border-border px-4 pb-6 pt-2"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-text-secondary hover:text-text-primary text-base font-medium transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center px-4 py-3 rounded-lg bg-primary text-background font-heading font-semibold text-sm cursor-pointer"
          >
            Get Early Access
          </a>
        </div>
      )}
    </header>
  )
}
