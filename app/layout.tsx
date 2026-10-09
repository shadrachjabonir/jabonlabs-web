import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import ScrollRevealInit from './components/ScrollRevealInit'

// ─── Font Loading via next/font ──────────────────────────────────────────
// next/font handles self-hosting — no external network request at runtime
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// ─── Site Metadata ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Jabon Labs — Amplifying Human Potential Through Science and Technology',
  description:
    'Jabon Labs builds intelligent systems that make everyday life safer, smarter, and more efficient. Starting with AI-enhanced school transport safety. Expanding to science itself.',
  keywords: [
    'Jabon Labs',
    'AI safety',
    'school transport',
    'Kawan app',
    'multi-agent AI',
    'deep tech',
    'science and technology',
  ],
  authors: [{ name: 'Shadrach Jabonir', url: 'https://jabonlabs.com' }],
  openGraph: {
    title: 'Jabon Labs',
    description: 'Amplifying Human Potential Through Science and Technology',
    url: 'https://jabonlabs.com',
    siteName: 'Jabon Labs',
    type: 'website',
    // TODO: Add og:image at /public/og-image.png (1200×630)
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jabon Labs',
    description: 'Amplifying Human Potential Through Science and Technology',
  },
  robots: {
    index: true,
    follow: true,
  },
  // TODO: Add favicon at /public/favicon.ico and /public/icon.svg
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      {/*
        suppressHydrationWarning is safe here — it only suppresses warnings on the
        <html> element itself, which Next.js sometimes patches for theme detection.
      */}
      <body className="font-body antialiased bg-background text-text-primary">
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  )
}
