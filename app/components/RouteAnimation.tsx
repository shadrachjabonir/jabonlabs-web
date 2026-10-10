'use client'

import { useEffect, useRef, useState } from 'react'

function SubIcon({ kind }: { kind: string }) {
  if (kind === 'cam') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 10l4.553-2.277A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
    </svg>
  )
  if (kind === 'check') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  )
  if (kind === 'bell') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.33-5M15 17H9m6 0a3 3 0 01-6 0M9.01 7.02A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17"/>
    </svg>
  )
  if (kind === 'relay') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
    </svg>
  )
  if (kind === 'home') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
  )
  return null
}

const NODES = [
  {
    pct: 4,
    label: 'School',
    title: 'Journey begins',
    sub: 'All students checked in via Kawan',
    icon: 'check',
    warn: false,
    cam: false,
  },
  {
    pct: 24,
    label: 'Stop 1',
    title: 'Aisha boards',
    sub: 'Parent notified instantly — confirmed on bus',
    icon: 'bell',
    warn: false,
    cam: false,
  },
  {
    pct: 44,
    label: 'Cabin cam',
    title: 'Parent watches live',
    sub: 'Live in-car feed open in parent app',
    icon: 'cam',
    warn: false,
    cam: true,
  },
  {
    pct: 64,
    label: 'AI relay',
    title: 'Parent messages driver',
    sub: 'AI admin relays "Please drop Aisha first" — driver notified',
    icon: 'relay',
    warn: false,
    cam: false,
  },
  {
    pct: 80,
    label: 'Stop 3',
    title: 'Route deviation detected',
    sub: 'AI alert sent to school and parents in < 1 s',
    icon: 'bell',
    warn: true,
    cam: false,
  },
  {
    pct: 96,
    label: 'Home',
    title: 'Every child home safe',
    sub: 'Zero incidents · daily report generated',
    icon: 'home',
    warn: false,
    cam: false,
  },
]

const DWELL  = 2800
const TRAVEL = 1400

function BusIcon() {
  return (
    <svg width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="32" height="15" rx="4" fill="#D1FAE5" stroke="#0D7A6A" strokeWidth="1.5" />
      <rect x="3"  y="3.5" width="12" height="7" rx="1.5" fill="#0D7A6A" fillOpacity="0.28" />
      <rect x="18" y="3.5" width="12" height="7" rx="1.5" fill="#0D7A6A" fillOpacity="0.28" />
      <circle cx="9"  cy="19" r="3.5" fill="#0D7A6A" />
      <circle cx="25" cy="19" r="3.5" fill="#0D7A6A" />
    </svg>
  )
}

function WarnIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <polygon points="6,1 11,10 1,10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="6" y1="4.5" x2="6" y2="7" stroke="#D97706" strokeWidth="1.2" />
      <circle cx="6" cy="8.5" r="0.7" fill="#D97706" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <path d="M1 4l2 2 4-4" stroke="#0D7A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function RouteAnimation() {
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

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: 'white', border: '1px solid #E8E3DA', boxShadow: '0 4px 24px rgba(28,23,20,0.06)' }}
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-2 border-b border-border text-center">
        <p className="font-heading font-semibold text-text-secondary text-xs uppercase tracking-wider">
          A Kawan-powered school morning
        </p>
      </div>

      {/* Caption — fades in on each node arrival */}
      <div
        key={captKey}
        className="px-6 py-4 text-center"
        style={{
          minHeight: 76,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          animation: 'captionIn 0.38s ease both',
        }}
      >
        <div className="flex items-center gap-2">
          {node.warn && <WarnIcon />}
          <p
            className="font-heading font-semibold text-sm"
            style={{ color: node.warn ? '#D97706' : '#EA580C' }}
          >
            {node.title}
          </p>
        </div>
        <div
          className="flex items-center justify-center gap-1.5 mt-1"
          style={{ color: node.warn ? '#D97706' : '#EA580C' }}
        >
          <SubIcon kind={node.icon} />
          <p className="font-body text-xs" style={{ color: '#9E9890' }}>
            {node.sub}
          </p>
        </div>
      </div>

      {/* Route track */}
      <div className="relative" style={{ height: 96 }}>

        {/* Background dashed line */}
        <div
          className="absolute"
          style={{
            top: 38, left: `${NODES[0].pct}%`, right: `${100 - NODES[NODES.length - 1].pct}%`,
            height: 2, background: '#E8E3DA',
          }}
        />

        {/* Traveled solid line */}
        <div
          className="absolute"
          style={{
            top: 38,
            left: `${NODES[0].pct}%`,
            height: 2,
            borderRadius: 1,
            background: 'linear-gradient(to right, #EA580C, #F97316)',
            width: `${Math.max(0, busPct - NODES[0].pct)}%`,
            transition: `width ${TRAVEL}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        />

        {/* Node circles */}
        {NODES.map((n, i) => {
          const active  = i === step
          const visited = i < step
          const iswarn  = active && n.warn
          const iscam   = active && n.cam
          return (
            <div
              key={n.label}
              className="absolute flex flex-col items-center"
              style={{ left: `${n.pct}%`, top: 26, transform: 'translateX(-50%)' }}
            >
              <div
                style={{
                  width:  active ? 24 : 16,
                  height: active ? 24 : 16,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: iswarn
                    ? 'linear-gradient(135deg,#FEF3C7,#FDE68A)'
                    : (visited || active)
                      ? 'linear-gradient(135deg,#FFEDD5,#FED7AA)'
                      : 'white',
                  border: `${active ? 2 : 1.5}px solid ${iswarn ? '#F59E0B' : (visited || active) ? '#EA580C' : '#E8E3DA'}`,
                  transition: 'all 0.4s ease',
                  position: 'relative', zIndex: 2,
                  boxShadow: active ? '0 0 0 4px rgba(234,88,12,0.12)' : 'none',
                }}
              >
                {(visited || (active && !n.warn)) && <CheckIcon />}
                {iswarn && <span style={{ fontSize: 10, fontWeight: 800, color: '#D97706', lineHeight: 1 }}>!</span>}
                {iscam && !visited && <span style={{ fontSize: 9, fontWeight: 800, color: '#EA580C', lineHeight: 1 }}>▶</span>}
              </div>
              <p
                className="font-body text-center mt-1.5"
                style={{
                  fontSize: 9,
                  whiteSpace: 'nowrap',
                  color: active ? '#5C5650' : '#B8B3AA',
                  fontWeight: active ? 600 : 400,
                }}
              >
                {n.label}
              </p>
            </div>
          )
        })}

        {/* Bus icon */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: `${busPct}%`,
            transform: 'translateX(-50%)',
            transition: `left ${TRAVEL}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            zIndex: 3,
          }}
        >
          <BusIcon />
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border py-3 text-center">
        <p
          className="font-heading text-xs"
          style={{ color: '#C8C3BA', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          Kawan · Kawal Anak
        </p>
      </div>
    </div>
  )
}
