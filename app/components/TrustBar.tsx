// ─── TrustBar ────────────────────────────────────────────────────────────
// Credibility anchor below the hero. Shows a trust statement and
// placeholder institution logos (grayscale, low opacity).
//
// TODO: Replace placeholder logos with real school/partner SVGs or next/image PNGs.
// TODO: Animate with a slow scroll marquee when logo count exceeds 6.

const PLACEHOLDER_LOGOS = [
  'School District A',
  'Education Network B',
  'Safety Council C',
  'Parents Association D',
  'Transport Authority E',
]

export default function TrustBar() {
  return (
    <section
      className="border-y border-border bg-card py-8"
      aria-label="Trusted by"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-text-muted text-sm font-heading uppercase tracking-widest mb-6">
          Designed for schools · Trusted by parents
        </p>

        {/* Placeholder logo row */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          aria-label="Partner organisations (placeholder)"
        >
          {PLACEHOLDER_LOGOS.map((name) => (
            <div
              key={name}
              className="h-6 px-4 rounded bg-border/40 flex items-center"
              aria-label={name}
            >
              {/* Replace this div with <Image> or <svg> for real logos */}
              <span className="text-text-muted text-xs font-body opacity-60 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
