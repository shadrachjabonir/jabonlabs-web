'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Product',  href: '#products' },
  { label: 'Technology', href: '#tech' },
  { label: 'Vision',   href: '#vision' },
  { label: 'Founder',  href: '#founder' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-soft'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group" aria-label="Jabon Labs home">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="7" fill="url(#navLogoGrad)" />
              <path d="M7 14L14 7L21 14L14 21L7 14Z" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="14" cy="14" r="3" fill="white" />
              <defs>
                <linearGradient id="navLogoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0D7A6A" />
                  <stop offset="1" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-heading font-bold text-text-primary text-base tracking-tight">
              Jabon Labs
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-lg font-body text-sm text-text-secondary hover:text-text-primary hover:bg-surface transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#waitlist"
              className="px-4 py-2 rounded-xl font-heading font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'var(--color-primary)' }}
            >
              Early Access
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-colors duration-150"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-3">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg font-body text-sm text-text-secondary hover:text-text-primary hover:bg-surface transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2.5 rounded-xl font-heading font-semibold text-sm text-white text-center transition-all duration-200"
              style={{ background: 'var(--color-primary)' }}
            >
              Request Early Access
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
