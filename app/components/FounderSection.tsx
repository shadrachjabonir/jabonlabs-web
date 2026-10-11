// ─── FounderSection ───────────────────────────────────────────────────────────
// Founder's Note — warm, professional, humanising.

import Image from 'next/image'

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-24"
      style={{ background: 'var(--color-surface)' }}
      aria-label="Founder's note"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── Left: Photo + attribution ── */}
          <div className="reveal lg:col-span-2 flex flex-col items-center lg:items-start">
            <div
              className="w-48 h-56 rounded-2xl overflow-hidden mb-5 relative"
              style={{ boxShadow: '0 8px 40px rgba(13,122,106,0.15)', border: '3px solid white' }}
            >
              <Image
                src="/founder.jpg"
                alt="Shadrach, founder of Jabon Labs"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                sizes="(max-width: 768px) 192px, 192px"
                priority
              />
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

            <div className="flex flex-wrap gap-2 mt-4">
              {['Enterprise Architecture', 'Domain-Driven Design', 'Multi-Agent AI', 'Kubernetes'].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full text-xs font-heading font-medium border"
                  style={{ borderColor: '#E8E3DA', color: 'var(--color-primary)', background: '#F0FDF9' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Quote + body ── */}
          <div className="reveal reveal-delay-1 lg:col-span-3">
            <p className="font-heading text-sm uppercase tracking-widest font-semibold mb-6"
               style={{ color: 'var(--color-primary)' }}>
              Founder&rsquo;s Note
            </p>

            <blockquote className="mb-6 pl-5 border-l-4" style={{ borderColor: 'var(--color-primary)' }}>
              <p
                className="font-heading font-semibold text-text-primary mb-3"
                style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', lineHeight: '1.35', letterSpacing: '-0.01em' }}
              >
                &ldquo;The only constant is change.&rdquo;
              </p>
              <footer className="text-text-muted font-body text-sm">— Shadrach Jabonir</footer>
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
                work taught me: complexity doesn&rsquo;t have to be complicated.
              </p>
              <p>
                When I looked at how children get to school — a daily operation with dozens of handoffs,
                multiple stakeholders, real safety stakes, and almost zero real-time intelligence — I
                saw the kind of problem I&rsquo;d been trained to solve. Kawan and SAPA are that answer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
