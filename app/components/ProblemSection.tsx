// ─── ProblemSection ───────────────────────────────────────────────────────────
// Pain points with a warm clean layout.

import { IconEyeOff, IconRouteDeviation, IconClipboardError } from './Icons'
import RouteAnimation from './RouteAnimation'
import type { ComponentType } from 'react'

const problems: { Icon: ComponentType<{ className?: string }>, title: string, body: string }[] = [
  {
    Icon: IconEyeOff,
    title: 'No Real-Time Visibility',
    body: 'Parents don\'t know if their child is on the bus, stuck in traffic, or already home.',
  },
  {
    Icon: IconRouteDeviation,
    title: 'Route Deviations Go Undetected',
    body: 'When a bus takes the wrong route or makes an unscheduled stop, no one is automatically alerted.',
  },
  {
    Icon: IconClipboardError,
    title: 'Manual Attendance is Error-Prone',
    body: 'Paper rolls and WhatsApp messages create information gaps that put children at risk.',
  },
]

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-24 bg-background"
      aria-label="The problem"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="reveal font-heading text-sm uppercase tracking-widest font-semibold mb-3"
             style={{ color: 'var(--color-secondary)' }}>
            The Problem
          </p>
          <h2
            className="reveal reveal-delay-1 font-heading font-bold text-text-primary"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}
          >
            School transport is the most important journey<br className="hidden md:block" /> with the least intelligence.
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i + 2} card-hover rounded-2xl bg-white border border-border p-7`}
              style={{ boxShadow: '0 2px 16px rgba(28,23,20,0.06)' }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)', color: 'var(--color-primary)' }}>
                <p.Icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-base mb-2">{p.title}</h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Animated route diagram */}
        <div className="reveal">
          <RouteAnimation />
        </div>
      </div>
    </section>
  )
}
