// ─── TrustBar ─────────────────────────────────────────────────────────────────
// Social proof anchor below the hero.

const logos = [
  'Primary School A',
  'Primary School B',
  'International School C',
  'Parent Community D',
  'Transport Agency E',
]

export default function TrustBar() {
  return (
    <div
      className="py-10 border-y border-border"
      style={{ background: 'var(--color-surface)' }}
      aria-label="Trusted by schools and parents"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-heading text-xs uppercase tracking-widest text-text-muted mb-7 font-semibold">
          Trusted by schools and parents
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((name) => (
            <div
              key={name}
              className="h-7 flex items-center px-3 rounded-lg"
              aria-label={name}
              title={name}
            >
              {/* Placeholder pill — replace with real logo <img> */}
              <div
                className="h-6 w-28 rounded-md"
                style={{ background: 'linear-gradient(90deg, #E8E3DA, #D5D0C8)' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
