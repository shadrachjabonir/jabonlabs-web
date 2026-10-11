// ─── VisionSection ────────────────────────────────────────────────────────────
// Warm, bright cinematic vision statement.

import { IconShieldHeart, IconCircuit, IconGlobe } from './Icons'
import type { ComponentType } from 'react'

const pillars: { Icon: ComponentType<{ className?: string }>, title: string, body: string }[] = [
  {
    Icon: IconShieldHeart,
    title: 'Safer Communities',
    body: 'Real-time intelligence that keeps every child accounted for — from gate to home.',
  },
  {
    Icon: IconCircuit,
    title: 'Smarter Systems',
    body: 'AI agents that coordinate across stakeholders, anticipating problems before they happen.',
  },
  {
    Icon: IconGlobe,
    title: 'Broader Impact',
    body: 'From school transport to healthcare logistics to infrastructure — intelligence wherever life matters most.',
  },
]

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-28 overflow-hidden"
      aria-label="Our vision"
      style={{ background: 'linear-gradient(160deg, #F0FDF9 0%, #FDFCFB 40%, #FFFBEB 100%)' }}
    >
      {/* Decorative warm arc */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 Q360,0 720,60 Q1080,120 1440,60 L1440,0 L0,0 Z" fill="rgba(13,122,106,0.04)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <p className="reveal text-center font-heading text-sm uppercase tracking-widest font-semibold mb-5"
           style={{ color: 'var(--color-primary)' }}>
          Our Vision
        </p>

        {/* Big statement */}
        <h2
          className="reveal reveal-delay-1 font-heading font-bold text-text-primary text-center mx-auto max-w-4xl mb-6"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            lineHeight: '1.12',
            letterSpacing: '-0.02em',
          }}
        >
          The most important systems in our lives deserve the most intelligent ones.
        </h2>

        <p className="reveal reveal-delay-2 font-body text-text-secondary text-center mx-auto max-w-2xl mb-16"
           style={{ fontSize: '1.1rem', lineHeight: '1.75' }}>
          We start with school safety and live commerce. We don&rsquo;t stop there.
        </p>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i + 2} card-hover rounded-2xl bg-white border border-border p-8`}
              style={{ boxShadow: '0 4px 24px rgba(13,122,106,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)', color: 'var(--color-primary)' }}
              >
                <p.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-lg mb-2">{p.title}</h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
