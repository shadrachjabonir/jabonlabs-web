// ─── SapaSection ──────────────────────────────────────────────────────────────
// SAPA (Siaran Pasar) product spotlight — parallel to KawanSection.

import { IconBroadcast, IconMultistream, IconArbitrage, IconQR, IconRelay } from './Icons'
import SapaAnimation from './SapaAnimation'
import type { ComponentType } from 'react'

const features: { Icon: ComponentType<{ className?: string }>, title: string, body: string, highlight?: boolean }[] = [
  {
    Icon: IconBroadcast,
    title: 'Browser-Native Live Stream',
    body: 'Go live directly from any browser — no OBS, no downloads. WebRTC captures your camera; SAPA handles the rest.',
    highlight: true,
  },
  {
    Icon: IconMultistream,
    title: 'Multistream to 3 Platforms',
    body: 'One stream, three audiences. SAPA restreams over RTMP to Instagram, Facebook and TikTok simultaneously.',
    highlight: true,
  },
  {
    Icon: IconArbitrage,
    title: 'AI Dropship Arbitrage',
    body: 'Viewers order via WhatsApp or Telegram. SAPA AI compares prices on Shopee, Tokopedia and TikTok Shop, adds your margin, and quotes the buyer instantly.',
  },
  {
    Icon: IconQR,
    title: 'QRIS Payment in Chat',
    body: 'Midtrans QRIS is generated and sent directly in the chat — no redirects, no checkout pages, no abandoned carts.',
  },
  {
    Icon: IconRelay,
    title: 'Hybrid Fulfilment Dashboard',
    body: 'After payment, the admin dashboard shows confirmed orders. Human admins place the marketplace purchase — keeping the system safe from bot detection.',
  },
]

const steps = [
  { num: '01', title: 'Set up your stream', body: 'Enter RTMP keys for each platform in the SAPA admin once. Then go live any time from your browser.' },
  { num: '02', title: 'Sync your catalog', body: 'Connect your Google Sheets product list. SAPA shows items as overlays during the broadcast.' },
  { num: '03', title: 'Viewers order via chat', body: 'WhatsApp or Telegram message triggers the AI — it identifies the product, checks prices and sends a QRIS.' },
  { num: '04', title: 'Collect and fulfil', body: 'Payment confirmed. Admin dashboard queues the order for purchase on the cheapest marketplace.' },
]

export default function SapaSection() {
  return (
    <section
      id="sapa"
      className="py-24"
      style={{ background: 'var(--color-surface)' }}
      aria-label="SAPA product"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal font-heading text-sm uppercase tracking-widest font-semibold mb-3"
             style={{ color: '#2563EB' }}>
            Product — SAPA
          </p>
          <h2
            className="reveal reveal-delay-1 font-heading font-bold text-text-primary mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}
          >
            Sell live. Everywhere. Automatically.
          </h2>
          <p className="reveal reveal-delay-2 font-body text-text-secondary max-w-xl mx-auto text-base" style={{ lineHeight: '1.75' }}>
            SAPA means <em>greet</em> in Malay and Indonesian. It is the AI that greets every buyer, finds the best price, and closes the sale — while you focus on the show.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {features.filter(f => f.highlight).map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${i + 2} card-hover rounded-2xl border p-8`}
              style={{
                background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                borderColor: '#BFDBFE',
                boxShadow: '0 4px 24px rgba(59,130,246,0.10)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)', color: 'white' }}
              >
                <f.Icon className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-0.5 rounded-full text-xs font-heading font-semibold"
                style={{ background: '#FEF3C7', color: '#D97706' }}>
                ★ Only on SAPA
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-base mb-2">{f.title}</h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.filter(f => !f.highlight).map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${i + 2} card-hover rounded-2xl bg-white border border-border p-7`}
              style={{ boxShadow: '0 4px 24px rgba(59,130,246,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)', color: '#2563EB' }}
              >
                <f.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-base mb-2">{f.title}</h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Animated SAPA flow */}
        <div className="reveal mb-20">
          <SapaAnimation />
        </div>

        {/* How It Works */}
        <div
          className="reveal rounded-2xl bg-white border border-border p-10"
          style={{ boxShadow: '0 4px 32px rgba(59,130,246,0.07)' }}
        >
          <h3 className="font-heading font-bold text-text-primary text-xl text-center mb-10">
            How It Works
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className={`reveal reveal-delay-${i + 1} flex flex-col gap-3`}>
                <div
                  className="w-10 h-10 rounded-xl font-heading font-bold text-sm flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)', color: '#2563EB' }}
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
