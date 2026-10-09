// ─── FounderSection ──────────────────────────────────────────────────────────
// Founder's Note — humanises the brand without sounding like a CV.
// Two-column: photo placeholder + pull quote / short bio.

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-24 bg-surface"
      aria-label="Founder's note"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Photo + attribution ── */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Photo placeholder — replace with <Image> when portrait is available */}
            <div
              className="w-40 h-40 rounded-2xl glow-border bg-card flex items-center justify-center mb-6 relative overflow-hidden"
              aria-label="Founder portrait — placeholder"
            >
              {/* Gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(0,200,255,0.1) 0%, rgba(123,97,255,0.1) 100%)' }}
                aria-hidden="true"
              />
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                <circle cx="28" cy="22" r="12" stroke="#94A3B8" strokeWidth="1.5" />
                <path d="M8 50c0-11 9-18 20-18s20 7 20 18" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <p className="font-heading font-semibold text-text-primary text-lg">
                Shadrach Jabonir
              </p>
              <p className="text-text-secondary font-body text-sm mt-1">
                Founder, Jabon Labs
              </p>
              <p className="text-text-muted font-body text-xs mt-1">
                Software Architect · AI Systems · Kubernetes
              </p>
            </div>

            {/* Credential highlights */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                'Enterprise Architecture',
                'Domain-Driven Design',
                'Multi-Agent AI',
                'Kubernetes',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full text-xs font-heading border border-border text-text-muted bg-card"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Quote + body ── */}
          <div>
            <p className="text-primary font-heading text-sm uppercase tracking-widest font-semibold mb-6">
              Founder&rsquo;s Note
            </p>

            {/* Pull quote */}
            <blockquote className="mb-6">
              <p
                className="font-heading font-semibold text-text-primary mb-3"
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em',
                }}
              >
                &ldquo;The most important systems in our lives are often the least intelligent ones.
                We&rsquo;re here to change that.&rdquo;
              </p>
              <footer className="text-text-muted font-body text-sm">
                — Shadrach Jabonir
              </footer>
            </blockquote>

            <div className="space-y-4 text-text-secondary font-body text-base" style={{ lineHeight: '1.75' }}>
              <p>
                I started Jabon Labs because the most important systems in our lives — the ones that
                move our children, manage our health, keep our communities safe — are often the least
                intelligent ones.
              </p>
              <p>
                My background is in enterprise software architecture. Years spent designing large-scale
                systems that need to stay up, stay consistent, and keep working under pressure. That
                work taught me something: complexity doesn&rsquo;t have to be complicated. A well-designed
                system feels simple from the outside because the hard thinking happened on the inside.
              </p>
              <p>
                When I looked at how children get to school every day — a daily operation involving
                dozens of handoffs, multiple stakeholders, real safety stakes, and almost zero
                real-time intelligence — I saw the kind of problem I&rsquo;d been trained to solve.
                Kawan is that solution. And it is only the beginning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
