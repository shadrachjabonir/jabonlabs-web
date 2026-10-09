'use client'

import { useEffect, useRef, useState } from 'react'

const NODES = [
  {
    pct: 4,
    label: 'School',
    title: 'Journey begins',
    sub: 'All students checked in via Kawan',
    warn: false,
    cam: false,
  },
  {
    pct: 24,
    label: 'Stop 1',
    title: 'Aisha boards',
    sub: 'Parent notified instantly — confirmed on bus',
    warn: false,
    cam: false,
  },
  {
    pct: 44,
    label: 'Cabin cam',
    title: 'Parent watches live',
    sub: '📹 Live in-car feed open in parent app',
    warn: false,
    cam: true,
  },
  {
    pct: 64,
    label: 'AI relay',
    title: 'Parent messages driver',
    sub: 'AI admin relays "Please drop Aisha first" — driver notified',
    warn: false,
    cam: false,
  },
  {
    pct: 80,
    label: 'Stop 3',
    title: 'Route deviation detected',
    sub: 'AI alert sent to school and parents in < 1 s',
    warn: true,
    cam: false,
  },
  {
    pct: 96,
    label: 'Home',
    title: 'Every child home safe',
    sub: 'Zero incidents · daily report generated ✓',
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
  const isCamStep = node.cam

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
            style={{ color: node.warn ? '#D97706' : isCamStep ? '#2563EB' : '#0D7A6A' }}
          >
            {node.title}
          </p>
        </div>
        <p className="font-body text-xs mt-1" style={{ color: '#9E9890' }}>
          {node.sub}
        </p>
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
            background: 'linear-gradient(to right, #0D7A6A, #10B981)',
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
                    : iscam
                      ? 'linear-gradient(135deg,#DBEAFE,#BFDBFE)'
                      : (visited || active)
                        ? 'linear-gradient(135deg,#D1FAE5,#A7F3D0)'
                        : 'white',
                  border: `${active ? 2 : 1.5}px solid ${iswarn ? '#F59E0B' : iscam ? '#3B82F6' : (visited || active) ? '#0D7A6A' : '#E8E3DA'}`,
                  transition: 'all 0.4s ease',
                  position: 'relative', zIndex: 2,
                  boxShadow: active ? `0 0 0 4px ${iscam ? 'rgba(59,130,246,0.15)' : 'rgba(13,122,106,0.12)'}` : 'none',
                }}
              >
                {(visited || (active && !n.warn)) && <CheckIcon />}
                {iswarn && <span style={{ fontSize: 10, fontWeight: 800, color: '#D97706', lineHeight: 1 }}>!</span>}
                {iscam && !visited && <span style={{ fontSize: 9, fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>▶</span>}
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
