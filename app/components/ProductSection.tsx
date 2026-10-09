// ─── ProductSection ───────────────────────────────────────────────────────────
// Kawan product spotlight with warm clean cards.

import { IconMapPin, IconAI, IconBell } from './Icons'
import type { ComponentType } from 'react'

const features: { Icon: ComponentType<{ className?: string }>, title: string, body: string }[] = [
  {
    Icon: IconMapPin,
    title: 'Live Route Tracking',
    body: 'GPS-accurate location of every school bus, updated in real time for parents and administrators.',
  },
  {
    Icon: IconAI,
    title: 'Multi-Agent AI',
    body: 'Autonomous agents monitor routes, flag anomalies, and coordinate alerts across all stakeholders simultaneously.',
  },
  {
    Icon: IconBell,
    title: 'Instant Alerts',
    body: 'Parents are notified the moment a deviation, delay or safety event is detected — no manual check needed.',
  },
]

const steps = [
  { num: '01', title: 'School sets up Kawan', body: 'Onboard buses, routes and student profiles in minutes.' },
  { num: '02', title: 'AI agents activate', body: 'Agents begin monitoring every journey from first stop to last.' },
  { num: '03', title: 'Parents get visibility', body: 'Live app view and proactive alerts — always in the loop.' },
  { num: '04', title: 'Schools gain insights', body: 'Attendance, punctuality and safety data at a glance.' },
]

export default function ProductSection() {
  return (
    <section
      id="products"
      className="py-24"
      style={{ background: 'var(--color-surface)' }}
      aria-label="Kawan product"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal font-heading text-sm uppercase tracking-widest font-semibold mb-3"
             style={{ color: 'var(--color-primary)' }}>
            Product — Kawan
          </p>
          <h2
            className="reveal reveal-delay-1 font-heading font-bold text-text-primary mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}
          >
            Intelligence for every school journey
          </h2>
          <p className="reveal reveal-delay-2 font-body text-text-secondary max-w-xl mx-auto text-base" style={{ lineHeight: '1.75' }}>
            Kawan means <em>friend</em> in Malay. It is the AI companion that watches over every bus, every route, every child.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${i + 2} card-hover rounded-2xl bg-white border border-border p-7`}
              style={{ boxShadow: '0 4px 24px rgba(13,122,106,0.07)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: '#F0FDF9', color: 'var(--color-primary)' }}
              >
                <f.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-base mb-2">{f.title}</h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div
          className="reveal rounded-2xl bg-white border border-border p-10"
          style={{ boxShadow: '0 4px 32px rgba(13,122,106,0.07)' }}
        >
          <h3 className="font-heading font-bold text-text-primary text-xl text-center mb-10">
            How It Works
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className={`reveal reveal-delay-${i + 1} flex flex-col gap-3`}>
                <div
                  className="w-10 h-10 rounded-xl font-heading font-bold text-sm flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)', color: 'var(--color-primary)' }}
                >
                  {s.num}
                </div>
                <h4 className="font-heading font-semibold text-text-primary text-sm">{s.title}</h4>
                <p className="font-body text-text-muted text-xs leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
