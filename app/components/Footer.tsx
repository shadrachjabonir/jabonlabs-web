// ─── Footer ───────────────────────────────────────────────────────────────────
// Warm clean footer — 3-column on desktop, stacked on mobile.

const year = new Date().getFullYear()

const footerLinks = {
  Products: [
    { label: 'Kawan',    href: '#products' },
    { label: 'Roadmap',  href: '#' },
    { label: 'Pricing',  href: '#' },
  ],
  Company: [
    { label: 'About',    href: '#founder' },
    { label: 'Vision',   href: '#vision' },
    { label: 'Careers',  href: '#' },
    { label: 'Blog',     href: '#' },
  ],
  Contact: [
    { label: 'shadrach@jabonlabs.com', href: 'mailto:shadrach@jabonlabs.com' },
    { label: 'LinkedIn',               href: '#' },
    { label: 'GitHub',                 href: 'https://github.com/shadrachjabonir' },
    { label: 'Twitter / X',            href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="border-t pt-16 pb-8"
      style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: Brand + Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="url(#footerLogoGrad)" />
                <path d="M7 14L14 7L21 14L14 21L7 14Z" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="14" cy="14" r="3" fill="white" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0D7A6A" />
                    <stop offset="1" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-heading font-semibold text-text-primary">Jabon Labs</span>
            </div>
            <p className="text-text-muted font-body text-sm" style={{ lineHeight: '1.65' }}>
              Amplifying human potential through science and technology.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-heading font-semibold text-text-secondary text-xs uppercase tracking-widest mb-4">
                {section}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-text-primary font-body text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p className="text-text-muted font-body text-xs">
            &copy; {year} Jabon Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-muted hover:text-text-primary font-body text-xs transition-colors duration-150">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted hover:text-text-primary font-body text-xs transition-colors duration-150">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
