// ─── KawanIntro ───────────────────────────────────────────────────────────────
// Brief intro strip replacing the placeholder logo bar.

import { IconMapPin, IconAI, IconBell, IconCamera, IconRelay, IconBroadcast, IconMultistream, IconQR } from './Icons'
import type { ComponentType } from 'react'

const kawanPoints: { Icon: ComponentType<{ className?: string }>, label: string }[] = [
  { Icon: IconCamera,      label: 'Live in-car camera' },
  { Icon: IconRelay,       label: 'AI admin — parent ↔ driver' },
  { Icon: IconMapPin,      label: 'Live trip tracking' },
  { Icon: IconBell,        label: 'Instant alerts' },
]

const sapaPoints: { Icon: ComponentType<{ className?: string }>, label: string }[] = [
  { Icon: IconBroadcast,   label: 'Browser live stream' },
  { Icon: IconMultistream, label: 'Multistream 3 platforms' },
  { Icon: IconAI,          label: 'AI price arbitrage' },
  { Icon: IconQR,          label: 'QRIS in chat' },
]

export default function TrustBar() {
  return (
    <div
      className="py-10 border-y border-border"
      style={{ background: 'var(--color-surface)' }}
      aria-label="Product features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* Kawan pills */}
          <div className="flex flex-col gap-2">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest" style={{ color: '#EA580C' }}>Kawan</span>
            <div className="flex flex-wrap gap-2">
              {kawanPoints.map((p) => (
                <div key={p.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border text-xs font-body"
                  style={{ borderColor: '#FED7AA', color: '#EA580C', boxShadow: '0 1px 6px rgba(234,88,12,0.07)' }}>
                  <p.Icon className="w-3.5 h-3.5 shrink-0" />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-border" aria-hidden="true" />

          {/* SAPA pills */}
          <div className="flex flex-col gap-2">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest" style={{ color: '#2563EB' }}>SAPA</span>
            <div className="flex flex-wrap gap-2">
              {sapaPoints.map((p) => (
                <div key={p.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border text-xs font-body"
                  style={{ borderColor: '#BFDBFE', color: '#2563EB', boxShadow: '0 1px 6px rgba(59,130,246,0.07)' }}>
                  <p.Icon className="w-3.5 h-3.5 shrink-0" />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
