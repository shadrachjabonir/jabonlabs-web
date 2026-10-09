// ─── TechSection ──────────────────────────────────────────────────────────────
// Infrastructure credibility — clean warm cards.

const pillars = [
  {
    icon: '🧠',
    title: 'Multi-Agent AI',
    body: 'Autonomous agents coordinate in real time — monitoring, alerting, and adapting without human intervention.',
    tags: ['LLM Orchestration', 'Event Streaming', 'Autonomous Agents'],
  },
  {
    icon: '☸️',
    title: 'Kubernetes-Native',
    body: 'Cloud-native architecture built to scale across cities, districts, and countries without re-engineering.',
    tags: ['K8s', 'Auto-scaling', 'Zero Downtime'],
  },
  {
    icon: '🏗️',
    title: 'Domain-Driven Design',
    body: 'Built on DDD principles — clean bounded contexts, reliable domain events, and predictable behaviour under load.',
    tags: ['DDD', 'Event Sourcing', 'CQRS'],
  },
  {
    icon: '🔒',
    title: 'Enterprise Reliability',
    body: 'Bank-grade security, 99.9% SLA, and end-to-end encryption on every data point.',
    tags: ['TLS 1.3', 'SOC2-ready', 'GDPR'],
  },
]

export default function TechSection() {
  return (
    <section
      id="tech"
      className="py-24 bg-background"
      aria-label="Technology infrastructure"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="reveal font-heading text-sm uppercase tracking-widest font-semibold mb-3"
             style={{ color: 'var(--color-primary)' }}>
            Built to Last
          </p>
          <h2
            className="reveal reveal-delay-1 font-heading font-bold text-text-primary"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}
          >
            Enterprise-grade infrastructure.<br className="hidden md:block" /> Human-scale simplicity.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl bg-white border border-border p-7`}
              style={{ boxShadow: '0 4px 24px rgba(28,23,20,0.06)' }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: '#FDFCFB', border: '1px solid #E8E3DA' }}
                  aria-hidden="true"
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary text-base mb-1.5">{p.title}</h3>
                  <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">{p.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-heading font-medium border"
                        style={{ borderColor: '#E8E3DA', color: 'var(--color-primary)', background: '#F0FDF9' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
