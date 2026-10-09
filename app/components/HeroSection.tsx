'use client'

// ─── HeroSection ─────────────────────────────────────────────────────────
// Full-viewport hero with animated grid background.
// Reduced-motion: static background, no animations.
//
// TODO (AI integration point):
//   Replace the static grid with a live multi-agent activity visualiser —
//   e.g. a canvas-based network graph showing agent nodes communicating in
//   real time. Import and mount it here as a client component.

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* ── Background: Animated Grid + Glow ── */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid animate-grid-shift opacity-100"
        aria-hidden="true"
        style={{ backgroundSize: '48px 48px' }}
      />
      <div
        className="absolute inset-0 bg-hero-glow"
        aria-hidden="true"
      />
      {/* Radial vignette to fade edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 50%, transparent 40%, #050510 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" aria-hidden="true" />
          <span className="text-primary text-xs font-heading font-semibold tracking-widest uppercase">
            Now in Early Access — Kawan
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-heading font-bold text-text-primary mb-6 animate-fade-up"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            animationDelay: '100ms',
          }}
        >
          Amplifying Human Potential
          <br />
          <span className="gradient-text">Through Science and Technology.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-text-secondary font-body text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ lineHeight: '1.7', animationDelay: '200ms' }}
        >
          Jabon Labs builds intelligent systems that make everyday life safer, smarter, and more
          efficient — for everyone, not just the few. Starting with AI. Expanding to science itself.
        </p>

        {/* CTA Row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          <a
            href="#waitlist"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-background font-heading font-semibold text-base hover:bg-primary-dark transition-all duration-200 shadow-glow-cyan cursor-pointer min-w-[180px] justify-center"
          >
            Get Early Access
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-primary/40 transition-all duration-200 font-heading font-medium text-base cursor-pointer"
          >
            Learn About Kawan
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Social proof seed */}
        <p
          className="mt-10 text-text-muted text-sm animate-fade-in"
          style={{ animationDelay: '500ms' }}
        >
          <span className="text-primary">★★★★★</span>&nbsp; Trusted by parents &amp; school administrators
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted animate-bounce"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest font-heading">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
