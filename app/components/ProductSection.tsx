// ─── ProductSection ───────────────────────────────────────────────────────────
// Kawan product spotlight — orange accent (#EA580C), half-width column layout.

import { IconMapPin, IconAI, IconBell, IconCamera, IconRelay } from './Icons'
import RouteAnimation from './RouteAnimation'
import type { ComponentType } from 'react'

// Kawan palette
const K = {
  accent:     '#EA580C',
  accentSoft: '#F97316',
  bgHi:       'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
  borderHi:   '#FED7AA',
  shadowHi:   '0 4px 24px rgba(234,88,12,0.10)',
  bgTile:     'linear-gradient(135deg, #FFEDD5, #FED7AA)',
  iconGrad:   'linear-gradient(135deg, #EA580C, #F97316)',
  shadow:     '0 4px 24px rgba(234,88,12,0.07)',
}

const features: { Icon: ComponentType<{ className?: string }>, title: string, body: string, highlight?: boolean }[] = [
  {
    Icon: IconCamera,
    title: 'Live In-Car Camera',
    body: 'Parents can watch a live cabin feed during every journey — see exactly what is happening inside the bus, in real time.',
    highlight: true,
  },
  {
    Icon: IconRelay,
    title: 'AI Admin — Parent ↔ Driver',
    body: 'Need to reach the driver? Kawan\'s AI admin mediates the conversation — no direct calls, no distractions, no miscommunication.',
    highlight: true,
  },
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
  { num: '03', title: 'Parents get live access', body: 'Watch the cabin cam and communicate through the AI admin.' },
  { num: '04', title: 'Schools gain insights', body: 'Attendance, punctuality and safety data at a glance.' },
]

export default function ProductSection() {
  return (
    <section
      id="kawan"
      className="py-16 px-6 lg:px-10"
      style={{ background: 'var(--color-background)' }}
      aria-label="Kawan product"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="reveal font-heading text-sm uppercase tracking-widest font-semibold mb-3"
           style={{ color: K.accent }}>
          Product — Kawan
        </p>
        <h2
          className="reveal reveal-delay-1 font-heading font-bold text-text-primary mb-4"
          style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}
        >
          Intelligence for every school journey
        </h2>
        <p className="reveal reveal-delay-2 font-body text-text-secondary text-sm mx-auto" style={{ lineHeight: '1.75', maxWidth: 380 }}>
          Kawan means <em>friend</em> in Malay. It is the AI companion that watches over every bus, every route, every child.
        </p>
      </div>

      {/* Differentiator highlight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {features.filter(f => f.highlight).map((f, i) => (
          <div
            key={f.title}
            className={`reveal reveal-delay-${i + 2} card-hover rounded-2xl border p-6`}
            style={{ background: K.bgHi, borderColor: K.borderHi, boxShadow: K.shadowHi }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ background: K.iconGrad, color: 'white' }}
            >
              <f.Icon className="w-5 h-5" />
            </div>
            <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-0.5 rounded-full text-xs font-heading font-semibold"
              style={{ background: '#FEF3C7', color: '#D97706' }}>
              ★ Only on Kawan
            </div>
            <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">{f.title}</h3>
            <p className="font-body text-text-secondary text-xs leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
        {features.filter(f => !f.highlight).map((f, i) => (
          <div
            key={f.title}
            className={`reveal reveal-delay-${i + 2} card-hover rounded-2xl bg-white border border-border p-5 ${i === 2 ? 'sm:col-span-2' : ''}`}
            style={{ boxShadow: K.shadow }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ background: K.bgTile, color: K.accent }}
            >
              <f.Icon className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">{f.title}</h3>
            <p className="font-body text-text-secondary text-xs leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>

      {/* Animated route */}
      <div className="reveal mb-14">
        <RouteAnimation />
      </div>

      {/* How It Works */}
      <div
        className="reveal rounded-2xl bg-white border border-border p-8"
        style={{ boxShadow: K.shadow }}
      >
        <h3 className="font-heading font-bold text-text-primary text-lg text-center mb-8">
          How It Works
        </h3>
        <div className="grid grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <div key={s.num} className={`reveal reveal-delay-${i + 1} flex flex-col gap-2`}>
              <div
                className="w-9 h-9 rounded-xl font-heading font-bold text-xs flex items-center justify-center"
                style={{ background: K.bgTile, color: K.accent }}
              >
                {s.num}
              </div>
              <h4 className="font-heading font-semibold text-text-primary text-xs">{s.title}</h4>
              <p className="font-body text-text-muted text-xs leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
