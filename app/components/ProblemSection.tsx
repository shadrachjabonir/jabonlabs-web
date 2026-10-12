'use client'

// Full-width problem section: Kawan (coral) then SAPA (blue), each with
// 3 problem cards laid out horizontally in one row on desktop.
// On mobile cards stack to a single column.

import { IconEyeOff, IconRouteDeviation, IconClipboardError,
         IconBroadcast, IconArbitrage, IconMultistream } from './Icons'
import type { ComponentType } from 'react'

const K = {
  accent:   '#EA580C',
  bgTile:   'linear-gradient(135deg, #FFEDD5, #FED7AA)',
  shadow:   '0 2px 16px rgba(234,88,12,0.07)',
}

const S = {
  accent:   '#2563EB',
  bgTile:   'linear-gradient(135deg, #DBEAFE, #BFDBFE)',
  shadow:   '0 2px 16px rgba(59,130,246,0.07)',
}

type Problem = { Icon: ComponentType<{ className?: string }>, title: string, body: string }

const kawanProblems: Problem[] = [
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

const sapaProblems: Problem[] = [
  {
    Icon: IconBroadcast,
    title: 'Going Live is Too Complicated',
    body: 'Setting up OBS, managing multiple streaming apps and switching between platforms costs hours — before a single sale.',
  },
  {
    Icon: IconMultistream,
    title: 'Orders Get Lost in the Chat',
    body: 'Viewers type their orders into a live chat moving hundreds of messages a minute. Most sellers miss them.',
  },
  {
    Icon: IconArbitrage,
    title: 'Price Research Kills the Moment',
    body: 'Manually checking Shopee, Tokopedia and TikTok Shop mid-stream takes minutes. Buyers move on.',
  },
]

function ProblemCard({ p, palette }: { p: Problem, palette: typeof K }) {
  return (
    <div className="card-hover rounded-2xl bg-white border border-border p-7 flex flex-col h-full"
      style={{ boxShadow: palette.shadow }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: palette.bgTile, color: palette.accent }}>
        <p.Icon className="w-5 h-5" />
      </div>
      <h3 className="font-heading font-semibold text-text-primary text-base mb-2">{p.title}</h3>
      <p className="font-body text-text-secondary text-sm leading-relaxed flex-1">{p.body}</p>
    </div>
  )
}

function ProductBlock({ label, headline, problems, palette }: {
  label: string
  headline: string
  problems: Problem[]
  palette: typeof K
}) {
  return (
    <div className="px-6 lg:px-10 py-16">
      <p className="reveal font-heading text-sm uppercase tracking-widest font-semibold mb-3"
        style={{ color: palette.accent }}>
        {label}
      </p>
      <h2 className="reveal font-heading font-bold text-text-primary mb-10"
        style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}>
        {headline}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {problems.map((p, i) => (
          <div key={p.title} className={`reveal reveal-delay-${i + 1}`}>
            <ProblemCard p={p} palette={palette} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProblemSection() {
  return (
    <section id="problem" aria-label="The problem"
      className="border-y border-border" style={{ background: 'var(--color-background)' }}>

      <div className="border-b border-border">
        <ProductBlock
          label="The Problem — Kawan"
          headline="School transport is the most important journey with the least intelligence."
          problems={kawanProblems}
          palette={K}
        />
      </div>

      <ProductBlock
        label="The Problem — SAPA"
        headline="Live selling is the fastest-growing channel — and the hardest to run."
        problems={sapaProblems}
        palette={S}
      />

    </section>
  )
}
