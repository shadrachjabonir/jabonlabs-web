'use client'

// Two-column layout: on desktop (md+) Kawan and SAPA sit side by side with
// a vertical divider. On mobile the columns stack — Kawan first, SAPA below.

import { IconMapPin, IconAI, IconBell, IconCamera, IconRelay,
         IconBroadcast, IconMultistream, IconArbitrage, IconQR } from './Icons'
import RouteAnimation from './RouteAnimation'
import SapaAnimation from './SapaAnimation'
import type { ComponentType } from 'react'

// ── Palettes ────────────────────────────────────────────────────────────────
const K = {
  accent:   '#EA580C',
  bgHi:     'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
  borderHi: '#FED7AA',
  shadowHi: '0 4px 24px rgba(234,88,12,0.10)',
  bgTile:   'linear-gradient(135deg, #FFEDD5, #FED7AA)',
  iconGrad: 'linear-gradient(135deg, #EA580C, #F97316)',
  shadow:   '0 4px 24px rgba(234,88,12,0.07)',
  badge:    { bg: '#FFEDD5', color: '#EA580C', label: '★ Only on Kawan' },
}

const S = {
  accent:   '#2563EB',
  bgHi:     'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
  borderHi: '#BFDBFE',
  shadowHi: '0 4px 24px rgba(59,130,246,0.10)',
  bgTile:   'linear-gradient(135deg, #DBEAFE, #BFDBFE)',
  iconGrad: 'linear-gradient(135deg, #2563EB, #3B82F6)',
  shadow:   '0 4px 24px rgba(59,130,246,0.06)',
  badge:    { bg: '#DBEAFE', color: '#2563EB', label: '★ Only on SAPA' },
}

// ── Data ────────────────────────────────────────────────────────────────────
type Feature = { Icon: ComponentType<{ className?: string }>, title: string, body: string, highlight?: boolean }

const kawanFeatures: Feature[] = [
  { Icon: IconCamera,  title: 'Live In-Car Camera',       highlight: true,
    body: 'Parents can watch a live cabin feed during every journey — see exactly what is happening inside the bus, in real time.' },
  { Icon: IconRelay,   title: 'AI Admin — Parent ↔ Driver', highlight: true,
    body: 'Need to reach the driver? Kawan\'s AI admin mediates the conversation — no direct calls, no distractions, no miscommunication.' },
  { Icon: IconMapPin,  title: 'Live Route Tracking',
    body: 'GPS-accurate location of every school bus, updated in real time for parents and administrators.' },
  { Icon: IconAI,      title: 'Multi-Agent AI',
    body: 'Autonomous agents monitor routes, flag anomalies, and coordinate alerts across all stakeholders simultaneously.' },
  { Icon: IconBell,    title: 'Instant Alerts',
    body: 'Parents are notified the moment a deviation, delay or safety event is detected — no manual check needed.' },
]

const sapaFeatures: Feature[] = [
  { Icon: IconBroadcast,   title: 'Browser-Native Live Stream', highlight: true,
    body: 'Go live directly from any browser — no OBS, no downloads. WebRTC captures your camera; SAPA handles the rest.' },
  { Icon: IconMultistream, title: 'Multistream to 3 Platforms', highlight: true,
    body: 'One stream, three audiences. SAPA restreams over RTMP to Instagram, Facebook and TikTok simultaneously.' },
  { Icon: IconArbitrage,   title: 'AI Dropship Arbitrage',
    body: 'Viewers order via WhatsApp or Telegram. SAPA AI compares prices on Shopee, Tokopedia and TikTok Shop, adds your margin, and quotes the buyer instantly.' },
  { Icon: IconQR,          title: 'QRIS Payment in Chat',
    body: 'Midtrans QRIS is generated and sent directly in the chat — no redirects, no checkout pages, no abandoned carts.' },
  { Icon: IconRelay,       title: 'Hybrid Fulfilment Dashboard',
    body: 'After payment, the admin dashboard shows confirmed orders. Human admins place the marketplace purchase — keeping the system safe from bot detection.' },
]

const kawanSteps = [
  { num: '01', title: 'School sets up Kawan',    body: 'Onboard buses, routes and student profiles in minutes.' },
  { num: '02', title: 'AI agents activate',      body: 'Agents begin monitoring every journey from first stop to last.' },
  { num: '03', title: 'Parents get live access', body: 'Watch the cabin cam and communicate through the AI admin.' },
  { num: '04', title: 'Schools gain insights',   body: 'Attendance, punctuality and safety data at a glance.' },
]

const sapaSteps = [
  { num: '01', title: 'Set up your stream',      body: 'Enter RTMP keys for each platform once. Then go live any time from your browser.' },
  { num: '02', title: 'Sync your catalog',       body: 'Connect your Google Sheets product list. SAPA shows items as overlays during the broadcast.' },
  { num: '03', title: 'Viewers order via chat',  body: 'WhatsApp or Telegram message triggers the AI — it identifies the product, checks prices and sends a QRIS.' },
  { num: '04', title: 'Collect and fulfil',      body: 'Payment confirmed. Admin dashboard queues the order for purchase on the cheapest marketplace.' },
]

// ── Shared sub-components ───────────────────────────────────────────────────
function HighlightCard({ f, p }: { f: Feature, p: typeof K }) {
  return (
    <div className="card-hover rounded-2xl border p-6 flex flex-col h-full"
      style={{ background: p.bgHi, borderColor: p.borderHi, boxShadow: p.shadowHi }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: p.iconGrad, color: 'white' }}>
        <f.Icon className="w-5 h-5" />
      </div>
      <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-0.5 rounded-full text-xs font-heading font-semibold self-start"
        style={{ background: p.badge.bg, color: p.badge.color }}>
        {p.badge.label}
      </div>
      <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">{f.title}</h3>
      <p className="font-body text-text-secondary text-xs leading-relaxed flex-1">{f.body}</p>
    </div>
  )
}

function FeatureCard({ f, p }: { f: Feature, p: typeof K }) {
  return (
    <div className="card-hover rounded-2xl bg-white border border-border p-5 flex flex-col h-full"
      style={{ boxShadow: p.shadow }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: p.bgTile, color: p.accent }}>
        <f.Icon className="w-5 h-5" />
      </div>
      <h3 className="font-heading font-semibold text-text-primary text-sm mb-2">{f.title}</h3>
      <p className="font-body text-text-secondary text-xs leading-relaxed flex-1">{f.body}</p>
    </div>
  )
}

// ── Section wrapper inside a column ─────────────────────────────────────────
function Section({ children, className = '', style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  return (
    <div className={`px-6 lg:px-10 border-b border-border ${className}`} style={style}>
      {children}
    </div>
  )
}

// ── Main export ──────────────────────────────────────────────────────────────
export default function ProductColumns() {
  const kawanHi  = kawanFeatures.filter(f =>  f.highlight)
  const kawanReg = kawanFeatures.filter(f => !f.highlight)
  const sapaHi   = sapaFeatures.filter(f =>  f.highlight)
  const sapaReg  = sapaFeatures.filter(f => !f.highlight)

  return (
    <div className="border-y border-border" style={{ background: 'var(--color-background)' }}>
      <div className="grid md:grid-cols-2 md:divide-x divide-border">

        {/* ══ Kawan column ══════════════════════════════════════════════════ */}
        <div id="kawan">

          {/* Header */}
          <Section className="py-12 text-center flex flex-col items-center" style={{ minHeight: 220 }}>
            <p className="reveal font-heading text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: K.accent }}>
              Product — Kawan
            </p>
            <h2 className="reveal font-heading font-bold text-text-primary mb-4"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}>
              Intelligence for every school journey
            </h2>
            <p className="reveal font-body text-text-secondary text-sm" style={{ lineHeight: '1.75', maxWidth: 380 }}>
              Kawan means <em>friend</em> in Malay — the AI companion that watches over every bus, every route, every child.
            </p>
          </Section>

          {/* Highlight cards */}
          <Section className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {kawanHi.map(f => <HighlightCard key={f.title} f={f} p={K} />)}
            </div>
          </Section>

          {/* Feature cards */}
          <Section className="pt-8 pb-4">
            <div className="grid grid-cols-2 gap-4 items-stretch">
              {kawanReg.slice(0, 2).map(f => <FeatureCard key={f.title} f={f} p={K} />)}
            </div>
          </Section>
          <Section className="pt-4 pb-8">
            <FeatureCard f={kawanReg[2]} p={K} />
          </Section>

          {/* Animation */}
          <Section className="py-8">
            <RouteAnimation variant="coral" />
          </Section>

          {/* How It Works */}
          <div className="px-6 lg:px-10 py-10">
            <div className="reveal rounded-2xl bg-white border border-border p-8" style={{ boxShadow: K.shadow }}>
              <h3 className="font-heading font-bold text-text-primary text-lg text-center mb-8">How It Works</h3>
              <div className="grid grid-cols-2 gap-5">
                {kawanSteps.map((s, i) => (
                  <div key={s.num} className={`reveal reveal-delay-${i + 1} flex flex-col gap-2`}>
                    <div className="w-9 h-9 rounded-xl font-heading font-bold text-xs flex items-center justify-center"
                      style={{ background: K.bgTile, color: K.accent }}>{s.num}</div>
                    <h4 className="font-heading font-semibold text-text-primary text-xs">{s.title}</h4>
                    <p className="font-body text-text-muted text-xs leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══ SAPA column ═══════════════════════════════════════════════════ */}
        <div id="sapa">

          {/* Header */}
          <Section className="py-12 text-center flex flex-col items-center" style={{ minHeight: 220 }}>
            <p className="reveal font-heading text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: S.accent }}>
              Product — SAPA
            </p>
            <h2 className="reveal font-heading font-bold text-text-primary mb-4"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}>
              Sell live. Everywhere. Automatically.
            </h2>
            <p className="reveal font-body text-text-secondary text-sm" style={{ lineHeight: '1.75', maxWidth: 380 }}>
              SAPA means <em>greet</em> in Malay and Indonesian — the AI that greets every buyer, finds the best price, and closes the sale.
            </p>
          </Section>

          {/* Highlight cards */}
          <Section className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {sapaHi.map(f => <HighlightCard key={f.title} f={f} p={S} />)}
            </div>
          </Section>

          {/* Feature cards */}
          <Section className="pt-8 pb-4">
            <div className="grid grid-cols-2 gap-4 items-stretch">
              {sapaReg.slice(0, 2).map(f => <FeatureCard key={f.title} f={f} p={S} />)}
            </div>
          </Section>
          <Section className="pt-4 pb-8">
            <FeatureCard f={sapaReg[2]} p={S} />
          </Section>

          {/* Animation */}
          <Section className="py-8">
            <SapaAnimation />
          </Section>

          {/* How It Works */}
          <div className="px-6 lg:px-10 py-10">
            <div className="reveal rounded-2xl bg-white border border-border p-8" style={{ boxShadow: S.shadow }}>
              <h3 className="font-heading font-bold text-text-primary text-lg text-center mb-8">How It Works</h3>
              <div className="grid grid-cols-2 gap-5">
                {sapaSteps.map((s, i) => (
                  <div key={s.num} className={`reveal reveal-delay-${i + 1} flex flex-col gap-2`}>
                    <div className="w-9 h-9 rounded-xl font-heading font-bold text-xs flex items-center justify-center"
                      style={{ background: S.bgTile, color: S.accent }}>{s.num}</div>
                    <h4 className="font-heading font-semibold text-text-primary text-xs">{s.title}</h4>
                    <p className="font-body text-text-muted text-xs leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
