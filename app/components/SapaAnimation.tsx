'use client'

import { useEffect, useRef, useState } from 'react'

const NODES = [
  {
    pct: 4,
    label: 'Studio',
    title: 'Live stream starts',
    sub: 'Host broadcasts from browser — no OBS needed',
    kind: 'stream',
  },
  {
    pct: 22,
    label: 'Multicast',
    title: 'Live on 3 platforms',
    sub: 'SAPA streams to Instagram, Facebook & TikTok at once',
    kind: 'multi',
  },
  {
    pct: 40,
    label: 'Viewer',
    title: 'Viewer orders via chat',
    sub: '"Mau pesan sepatu yang tadi!" on WhatsApp or Telegram',
    kind: 'chat',
  },
  {
    pct: 60,
    label: 'AI',
    title: 'AI finds cheapest price',
    sub: 'Checks Shopee, Tokopedia & TikTok Shop — adds margin',
    kind: 'ai',
  },
  {
    pct: 78,
    label: 'Payment',
    title: 'QRIS sent & paid',
    sub: 'Midtrans QRIS in chat · payment confirmed in seconds',
    kind: 'pay',
  },
  {
    pct: 96,
    label: 'Fulfilled',
    title: 'Admin fulfils order',
    sub: 'Dashboard shows order · admin purchases from marketplace ✓',
    kind: 'done',
  },
]

const DWELL  = 2600
const TRAVEL = 1300

const BLUE = { bg: 'linear-gradient(135deg,#DBEAFE,#BFDBFE)', border: '#2563EB', text: '#2563EB', glow: 'rgba(37,99,235,0.13)' }

const KIND_COLORS: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  stream: BLUE,
  multi:  BLUE,
  chat:   BLUE,
  ai:     BLUE,
  pay:    BLUE,
  done:   BLUE,
}

function CheckIcon({ color = '#2563EB' }: { color?: string }) {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <path d="M1 4l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SignalIcon() {
  return (
    <svg width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden="true">
      <rect x="1" y="3" width="32" height="14" rx="4" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="8" cy="10" r="3" fill="#3B82F6" fillOpacity="0.5" />
      <rect x="14" y="6" width="14" height="2" rx="1" fill="#3B82F6" fillOpacity="0.4" />
      <rect x="14" y="10" width="10" height="2" rx="1" fill="#3B82F6" fillOpacity="0.3" />
    </svg>
  )
}

export default function SapaAnimation() {
  const [step,    setStep]    = useState(0)
  const [busPct,  setBusPct]  = useState(NODES[0].pct)
  const [captKey, setCaptKey] = useState(0)
  const tm = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const advance = (cur: number) => {
      tm.current = setTimeout(() => {
        const next = (cur + 1) % NODES.length
        setBusPct(NODES[next].pct)
        tm.current = setTimeout(() => {
          setStep(next)
          setCaptKey(k => k + 1)
          advance(next)
        }, TRAVEL)
      }, DWELL)
    }
    advance(0)
    return () => clearTimeout(tm.current)
  }, [])

  const node = NODES[step]
  const col  = KIND_COLORS[node.kind]

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: 'white', border: '1px solid #E8E3DA', boxShadow: '0 4px 24px rgba(28,23,20,0.06)' }}
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-2 border-b border-border text-center">
        <p className="font-heading font-semibold text-text-secondary text-xs uppercase tracking-wider">
          A SAPA-powered live sale
        </p>
      </div>

      {/* Caption */}
      <div
        key={captKey}
        className="px-6 py-4 text-center"
        style={{
          minHeight: 76,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          animation: 'captionIn 0.38s ease both',
        }}
      >
        <p className="font-heading font-semibold text-sm" style={{ color: col.text }}>
          {node.title}
        </p>
        <p className="font-body text-xs mt-1" style={{ color: '#9E9890' }}>
          {node.sub}
        </p>
      </div>

      {/* Track */}
      <div className="relative" style={{ height: 96 }}>
        {/* Background line */}
        <div className="absolute" style={{
          top: 38, left: `${NODES[0].pct}%`, right: `${100 - NODES[NODES.length - 1].pct}%`,
          height: 2, background: '#E8E3DA',
        }} />

        {/* Traveled line */}
        <div className="absolute" style={{
          top: 38,
          left: `${NODES[0].pct}%`,
          height: 2,
          borderRadius: 1,
          background: 'linear-gradient(to right, #2563EB, #3B82F6)',
          width: `${Math.max(0, busPct - NODES[0].pct)}%`,
          transition: `width ${TRAVEL}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }} />

        {/* Node circles */}
        {NODES.map((n, i) => {
          const active  = i === step
          const visited = i < step
          const c = KIND_COLORS[n.kind]
          return (
            <div
              key={n.label}
              className="absolute flex flex-col items-center"
              style={{ left: `${n.pct}%`, top: 26, transform: 'translateX(-50%)' }}
            >
              <div style={{
                width:  active ? 24 : 16,
                height: active ? 24 : 16,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: (visited || active) ? c.bg : 'white',
                border: `${active ? 2 : 1.5}px solid ${(visited || active) ? c.border : '#E8E3DA'}`,
                transition: 'all 0.4s ease',
                position: 'relative', zIndex: 2,
                boxShadow: active ? `0 0 0 4px ${c.glow}` : 'none',
              }}>
                {visited && <CheckIcon color={c.text} />}
                {active && !visited && <span style={{ fontSize: 8, color: c.text, fontWeight: 800 }}>●</span>}
              </div>
              <p className="font-body text-center mt-1.5" style={{
                fontSize: 9, whiteSpace: 'nowrap',
                color: active ? '#5C5650' : '#B8B3AA',
                fontWeight: active ? 600 : 400,
              }}>
                {n.label}
              </p>
            </div>
          )
        })}

        {/* Signal icon moving along track */}
        <div style={{
          position: 'absolute',
          top: 14,
          left: `${busPct}%`,
          transform: 'translateX(-50%)',
          transition: `left ${TRAVEL}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          zIndex: 3,
        }}>
          <SignalIcon />
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border py-3 text-center">
        <p className="font-heading text-xs" style={{ color: '#C8C3BA', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          SAPA · Siaran Pasar
        </p>
      </div>
    </div>
  )
}
