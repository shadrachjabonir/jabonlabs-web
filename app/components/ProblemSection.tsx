// ─── ProblemSection ───────────────────────────────────────────────────────────
// Pain points with a warm clean layout.

import { IconEyeOff, IconRouteDeviation, IconClipboardError } from './Icons'
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

        {/* Route diagram */}
        <div
          className="reveal rounded-2xl border border-border bg-white p-8"
          style={{ boxShadow: '0 4px 24px rgba(28,23,20,0.06)' }}
        >
          <p className="font-heading font-semibold text-text-secondary text-sm mb-6 text-center uppercase tracking-wider">
            A typical school morning — zero AI intelligence
          </p>
          <div className="overflow-x-auto">
            <svg
              viewBox="0 0 700 120"
              className="w-full max-w-2xl mx-auto"
              aria-label="Route diagram showing lack of real-time tracking"
              role="img"
            >
              {/* Route line */}
              <line x1="60" y1="60" x2="640" y2="60" stroke="#E8E3DA" strokeWidth="2" strokeDasharray="6 4" />

              {/* Stops */}
              {[
                { x: 60,  label: 'School' },
                { x: 200, label: 'Stop 1' },
                { x: 350, label: 'Stop 2' },
                { x: 500, label: '??' },
                { x: 640, label: 'Home?' },
              ].map(({ x, label }, i) => (
                <g key={label}>
                  <circle
                    cx={x} cy={60} r={i === 3 ? 14 : 10}
                    fill={i === 3 ? '#FEF3C7' : '#F0FDF9'}
                    stroke={i === 3 ? '#F59E0B' : '#0D7A6A'}
                    strokeWidth={i === 3 ? 2 : 1.5}
                  />
                  {i === 3 && (
                    <text x={x} y={65} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#D97706">?</text>
                  )}
                  <text x={x} y={92} textAnchor="middle" fontSize="10" fill="#9E9890" fontFamily="sans-serif">
                    {label}
                  </text>
                </g>
              ))}

              {/* Bus icon — small SVG rect bus */}
              <g transform="translate(268,28)" aria-hidden="true">
                <rect x="0" y="0" width="24" height="14" rx="3" fill="#D1FAE5" stroke="#0D7A6A" strokeWidth="1.2" />
                <rect x="2" y="3" width="8" height="5" rx="1" fill="#0D7A6A" fillOpacity="0.3" />
                <rect x="13" y="3" width="8" height="5" rx="1" fill="#0D7A6A" fillOpacity="0.3" />
                <circle cx="5"  cy="14" r="2.5" fill="#0D7A6A" />
                <circle cx="19" cy="14" r="2.5" fill="#0D7A6A" />
              </g>

              {/* Alert marker — triangle warning */}
              <g transform="translate(488,14)" aria-hidden="true">
                <polygon points="12,2 22,20 2,20" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
                <line x1="12" y1="8" x2="12" y2="14" stroke="#D97706" strokeWidth="1.5" />
                <circle cx="12" cy="17" r="1" fill="#D97706" />
              </g>
              <text x="500" y="18" textAnchor="middle" fontSize="8" fill="#D97706" fontFamily="sans-serif">
                Untracked
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
