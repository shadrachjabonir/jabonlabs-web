// ─── VisionSection ──────────────────────────────────────────────────────────
// Cinematic full-width section establishing Jabon Labs' long-term trajectory.
// Large type, star-field background, minimal content.

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Vision"
    >
      {/* ── Star-field background ── */}
      {/*
        TODO: Replace with a canvas-based star-field or Three.js particle system.
        Current implementation uses CSS radial gradients as a lightweight fallback.
      */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #050510 0%, #080818 50%, #050510 100%)',
        }}
        aria-hidden="true"
      />
      {/* Simulated stars */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20% 15%, rgba(255,255,255,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 25%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 60%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 45%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 35%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 70%, rgba(255,255,255,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 90%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(2px 2px at 60% 80%, rgba(0,200,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 10%, rgba(123,97,255,0.5) 0%, transparent 100%)
          `,
        }}
        aria-hidden="true"
      />
      {/* Centre glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,200,255,0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-primary font-heading text-sm uppercase tracking-widest font-semibold mb-8">
          The Long Arc
        </p>

        <h2
          className="font-heading font-bold text-text-primary mb-8"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
          }}
        >
          We start with children{' '}
          <span className="gradient-text">getting home safely.</span>
          <br />
          We don&rsquo;t stop there.
        </h2>

        <p
          className="text-text-secondary font-body text-lg mb-12 max-w-2xl mx-auto"
          style={{ lineHeight: '1.75' }}
        >
          Jabon Labs is a technology company in the deepest sense. Software and AI today, broader
          scientific disciplines tomorrow — materials, biology, computation, space. Wherever technology
          can meaningfully extend what it means to be human in this universe, that is where we intend
          to go.
        </p>

        {/* Three vision pillars */}
        <div className="grid sm:grid-cols-3 gap-6 text-left">
          {[
            {
              headline: 'Systems That Help',
              body: 'We engineer for real, high-stakes problems — not demos. Every product must make a measurable positive difference in at least one life.',
            },
            {
              headline: 'Persist Humanity',
              body: 'Our decisions carry a hundred-year horizon. Technology is humanity\'s most powerful lever for survival and flourishing.',
            },
            {
              headline: 'Radical Efficiency',
              body: 'Friction is a cost. We build to eliminate it — in transport, in decisions, in daily life — so human effort goes where it matters.',
            },
          ].map((pillar) => (
            <div
              key={pillar.headline}
              className="p-5 rounded-xl bg-card/50 glow-border backdrop-blur-sm"
            >
              <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">
                {pillar.headline}
              </h3>
              <p className="text-text-secondary font-body text-xs" style={{ lineHeight: '1.65' }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
