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
      aria-label="What is Kawan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* Label */}
          <div className="shrink-0 text-center md:text-left">
            <p className="font-heading font-bold text-text-primary text-base">Two products. One mission.</p>
            <p className="font-body text-text-secondary text-sm mt-0.5">
              Kawan · SAPA
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-border" aria-hidden="true" />

          {/* Kawan pills */}
          <div className="flex flex-col gap-2">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest" style={{ color: '#0D7A6A' }}>Kawan</span>
            <div className="flex flex-wrap gap-2">
              {kawanPoints.map((p) => (
                <div key={p.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border text-xs font-body"
                  style={{ borderColor: '#A7F3D0', color: '#0D7A6A', boxShadow: '0 1px 6px rgba(13,122,106,0.07)' }}>
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
