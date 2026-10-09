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
              <svg width="28" height="28" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="footerJLGrad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#0D7A6A"/>
                    <stop offset="100%" stopColor="#059669"/>
                  </linearGradient>
                </defs>
                <path d="M 112,22 L 112,148 C 130,148 152,146 174,141" stroke="url(#footerJLGrad)" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M 112,22 C 100,12 80,10 62,20 C 44,32 34,58 34,86 C 34,112 44,132 52,142 C 58,150 54,160 44,163 C 34,165 24,157 24,146" stroke="url(#footerJLGrad)" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M 24,146 C 18,132 24,114 38,112 C 52,110 60,124 54,138" stroke="url(#footerJLGrad)" strokeWidth="13" strokeLinecap="round"/>
                <path d="M 152,8 L 157,21 L 172,26 L 157,31 L 152,44 L 147,31 L 132,26 L 147,21 Z" fill="#F59E0B"/>
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
