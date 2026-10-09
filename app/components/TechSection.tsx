// ─── TechSection ────────────────────────────────────────────────────────────
// Built for sophisticated buyers: school districts, enterprise procurement.
// Approachable language, technically credible detail.
//
// TODO (AI integration point): Add a live "Agent Activity Monitor" component
// here that visualises the multi-agent pipeline processing real events.
// This could be a WebSocket-driven event stream rendered as animated nodes.

const pillars = [
  {
    label: 'Multi-Agent AI',
    description: 'Coordinated intelligence, not a chatbot. Specialised agents handle geolocation, alert escalation, guardian communication, and scheduling — simultaneously.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="26" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="13" y1="11" x2="8" y2="21" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
        <line x1="19" y1="11" x2="24" y2="21" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
        <line x1="10" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    label: 'Kubernetes-Native',
    description: 'Designed to scale from one school district to a national network without re-architecture. Infrastructure that grows with demand, not against it.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <polygon points="16,4 28,10 28,22 16,28 4,22 4,10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <polygon points="16,10 22,13 22,19 16,22 10,19 10,13" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Domain-Driven Design',
    description: 'Systems modelled around real-world operations — routes, escorts, handoffs, schools — not around databases or frameworks. Software that matches how the world actually works.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="8" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="20" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="9" y1="16" x2="16" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="23" y1="16" x2="16" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Enterprise-Grade Reliability',
    description: 'Built on proven architectural patterns used in financial and healthcare systems. Designed for the uptime expectations of child safety infrastructure.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4L4 8v8c0 8 6 14 12 16 6-2 12-8 12-16V8L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <polyline points="10 16 14 20 22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function TechSection() {
  return (
    <section
      id="technology"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Technology"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(123,97,255,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Header ── */}
          <div>
            <p className="text-secondary font-heading text-sm uppercase tracking-widest font-semibold mb-4">
              Infrastructure
            </p>
            <h2
              className="font-heading font-bold text-text-primary mb-6"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.01em',
              }}
            >
              Built on Infrastructure That{' '}
              <span className="gradient-text">Doesn&rsquo;t Fail</span>
            </h2>
            <p className="text-text-secondary font-body text-base mb-8" style={{ lineHeight: '1.75' }}>
              Kawan is not a prototype. It is engineered using the same architectural principles that
              underpin banking systems and healthcare infrastructure — because when children&rsquo;s safety is
              the product, reliability is non-negotiable.
            </p>

            {/* Tech stack callout pills */}
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'Kubernetes', 'PostgreSQL', 'Redis', 'LLM Agents', 'WebSockets', 'DDD'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-heading font-medium border border-border text-text-secondary bg-card"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Pillars ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="p-5 rounded-xl glow-border bg-card hover:border-secondary/40 transition-all duration-300 group cursor-default"
              >
                <div className="text-secondary mb-3 transition-transform duration-200 group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">
                  {pillar.label}
                </h3>
                <p className="text-text-secondary font-body text-xs" style={{ lineHeight: '1.65' }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
