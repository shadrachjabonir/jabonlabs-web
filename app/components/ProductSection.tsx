// ─── ProductSection ────────────────────────────────────────────────────────
// Kawan product spotlight — 3-column feature cards + how it works steps.
//
// TODO (AI integration point): Add a live demo panel below the feature grid
// showing a simulated multi-agent coordination view — agents communicating
// events in a network graph or event stream. Mount a <AgentDemoPanel> component here.

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L3 8v6c0 6.08 4.68 11.76 11 13 6.32-1.24 11-6.92 11-13V8L14 3z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Verified Handoffs',
    body: 'Every escort confirmed via QR or biometric check-in. Every transfer logged with timestamp and location. No assumptions, no ambiguity.',
    color: 'text-primary',
    glow: 'rgba(0,200,255,0.12)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="4" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="21" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="14" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="21" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Live Journey Tracking',
    body: 'Real-time GPS status at every stage — pickup, en route, school arrival, return. Parents see exactly where their child is, always.',
    color: 'text-secondary',
    glow: 'rgba(123,97,255,0.12)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="14" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
        <circle cx="19" cy="14" r="2" fill="currentColor" opacity="0.5" />
        <path d="M14 6V3M8 6V3M20 6V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI Anomaly Detection',
    body: 'Kawan learns what "normal" looks like for each route. Any deviation — delay, wrong turn, missed handoff — triggers an immediate alert before a parent thinks to check.',
    color: 'text-primary',
    glow: 'rgba(0,200,255,0.12)',
  },
]

const steps = [
  {
    number: '01',
    title: 'School registers routes and authorises escorts',
    body: 'Administrators configure transport routes, assign authorised escorts, and set expected schedules — once, in minutes.',
  },
  {
    number: '02',
    title: 'Parent receives daily journey status',
    body: 'Real-time push notifications at each journey milestone: pickup confirmed, en route, arrived safely. Silence means everything is on track.',
  },
  {
    number: '03',
    title: 'AI monitors every handoff and flags anomalies',
    body: "Kawan's multi-agent system watches location, timing, and handoff confirmations simultaneously. It alerts the right person instantly when anything deviates.",
  },
  {
    number: '04',
    title: 'Administrators get full visibility and reporting',
    body: 'Schools see daily journey summaries, incident logs, and trend analytics — everything needed to continuously improve transport safety.',
  },
]

export default function ProductSection() {
  return (
    <section id="products" className="py-24 bg-surface" aria-label="Kawan product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm uppercase tracking-widest font-semibold mb-4">
            Flagship Product
          </p>
          <h2
            className="font-heading font-bold text-text-primary mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
            }}
          >
            Meet Kawan — The AI Safety Layer for School Transport
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            From pickup to drop-off, every step verified, every deviation flagged. Peace of mind as a product.
          </p>
        </div>

        {/* ── Feature Cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl p-6 glow-border bg-card hover:border-primary/40 transition-all duration-300 group cursor-default"
              style={{
                background: `linear-gradient(135deg, ${feature.glow} 0%, transparent 60%), var(--color-card)`,
              }}
            >
              <div className={`${feature.color} mb-4 transition-transform duration-200 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary font-body text-sm" style={{ lineHeight: '1.7' }}>
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── How It Works ── */}
        <div>
          <h3 className="font-heading font-bold text-text-primary text-center text-2xl mb-12">
            How Kawan Works
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-5 left-full w-full h-px -translate-y-1/2 z-0"
                    style={{
                      background: 'linear-gradient(to right, rgba(0,200,255,0.3), transparent)',
                      width: 'calc(100% - 32px)',
                      left: 'calc(100% - 16px)',
                    }}
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 flex flex-col">
                  {/* Step number */}
                  <span
                    className="font-heading font-bold text-primary/30 mb-3"
                    style={{ fontSize: '2.5rem', lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h4 className="font-heading font-semibold text-text-primary text-sm mb-2">
                    {step.title}
                  </h4>
                  <p className="text-text-secondary font-body text-xs" style={{ lineHeight: '1.65' }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-background font-heading font-semibold text-sm hover:bg-primary-dark transition-all duration-200 shadow-glow-cyan cursor-pointer"
            >
              Request a Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
