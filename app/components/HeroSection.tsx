'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const blob1 = useRef<HTMLDivElement>(null)
  const blob2 = useRef<HTMLDivElement>(null)

  // Subtle parallax on blobs
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18
      const y = (e.clientY / window.innerHeight - 0.5) * 18
      if (blob1.current) blob1.current.style.transform = `translate(${x}px, ${y}px) scale(1)`
      if (blob2.current) blob2.current.style.transform = `translate(${-x * 0.7}px, ${-y * 0.7}px) scale(1)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      aria-label="Hero"
    >
      {/* Animated warm blobs */}
      <div
        ref={blob1}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl animate-blob-shift"
        style={{ background: 'radial-gradient(circle, #A7F3D0 0%, #6EE7B7 40%, transparent 70%)', transition: 'transform 0.4s ease' }}
        aria-hidden="true"
      />
      <div
        ref={blob2}
        className="absolute -bottom-32 -right-24 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-blob-shift"
        style={{ background: 'radial-gradient(circle, #FDE68A 0%, #FCD34D 40%, transparent 70%)', animationDelay: '3s', transition: 'transform 0.4s ease' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-3xl animate-blob-shift"
        style={{ background: 'radial-gradient(ellipse, #99F6E4 0%, #5EEAD4 50%, transparent 70%)', animationDelay: '5s' }}
        aria-hidden="true"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1C1714 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border border-border bg-white/80 backdrop-blur-sm shadow-soft animate-fade-in">
          <span
            className="w-2 h-2 rounded-full animate-float"
            style={{ background: 'var(--color-primary)' }}
          />
          <span className="font-heading text-xs font-semibold text-text-secondary uppercase tracking-widest">
            Amplifying Human Potential
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-heading font-bold text-text-primary mb-6 animate-fade-up"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            animationDelay: '0.1s',
          }}
        >
          Intelligent apps for{' '}
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #0D7A6A 0%, #059669 50%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            real lives.
          </span>
        </h1>

        {/* Sub */}
        <p
          className="font-body text-text-secondary mb-10 mx-auto max-w-2xl animate-fade-up"
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            lineHeight: '1.75',
            animationDelay: '0.22s',
          }}
        >
          Jabon Labs builds AI-powered software that solves real, high-stakes problems.
          Two products in the world — one keeps children safe on their way to school, the other helps sellers go live and sell smarter.
        </p>

        {/* Product pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 animate-fade-up" style={{ animationDelay: '0.28s' }}>
          <a href="#kawan"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border bg-white/80 backdrop-blur-sm font-heading font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ borderColor: '#FED7AA', color: '#EA580C', boxShadow: '0 2px 12px rgba(234,88,12,0.10)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#EA580C' }} />
            Kawan — Kawal Anak
          </a>
          <a href="#sapa"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border bg-white/80 backdrop-blur-sm font-heading font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ borderColor: '#BFDBFE', color: '#2563EB', boxShadow: '0 2px 12px rgba(59,130,246,0.10)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#2563EB' }} />
            SAPA — Siaran Pasar
          </a>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '0.34s' }}
        >
          <a
            href="#waitlist"
            className="px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white transition-all duration-200 hover:shadow-glow-teal hover:-translate-y-0.5"
            style={{ background: 'var(--color-primary)' }}
          >
            Request Early Access
          </a>
          <a
            href="#kawan"
            className="px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-text-primary border border-border bg-white/70 backdrop-blur-sm hover:bg-white hover:border-primary/30 transition-all duration-200"
          >
            Explore our products →
          </a>
        </div>

        {/* Social proof */}
        <p
          className="mt-8 text-text-muted font-body text-sm animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Kawan · SAPA · Jabon Labs
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-background))' }}
        aria-hidden="true"
      />
    </section>
  )
}
