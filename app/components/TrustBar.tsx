// ─── KawanIntro ───────────────────────────────────────────────────────────────
// Brief intro strip replacing the placeholder logo bar.

const points = [
  { icon: '📍', label: 'Live trip tracking' },
  { icon: '🤖', label: 'AI anomaly alerts' },
  { icon: '🔔', label: 'Instant parent notifications' },
  { icon: '✅', label: 'Verified safe escorts' },
]

export default function TrustBar() {
  return (
    <div
      className="py-10 border-y border-border"
      style={{ background: 'var(--color-surface)' }}
      aria-label="What is Kawan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* Label */}
          <div className="shrink-0 text-center md:text-left">
            <p className="font-heading font-bold text-text-primary text-base">What is Kawan?</p>
            <p className="font-body text-text-secondary text-sm mt-0.5">
              Kawal Anak
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-border" aria-hidden="true" />

          {/* Points */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {points.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-sm font-body text-text-secondary"
                style={{ boxShadow: '0 1px 6px rgba(28,23,20,0.06)' }}
              >
                <span aria-hidden="true">{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
