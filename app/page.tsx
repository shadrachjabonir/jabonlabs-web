// ─── app/page.tsx ─────────────────────────────────────────────────────────
// Jabon Labs Landing Page — Main Page Component (Next.js App Router)
//
// Section order mirrors the wireframe (landing-page-wireframe.md):
//   1. Navbar (in layout or as sticky component)
//   2. Hero
//   3. Trust Bar
//   4. Problem Statement
//   5. Product Spotlight (Kawan)
//   6. Technology
//   7. Vision
//   8. Founder's Note
//   9. Waitlist / CTA
//  10. Footer
//
// ── AI Integration Points (marked with TODO throughout child components) ──
//   • HeroSection: replace static grid with live multi-agent activity visualiser
//   • ProblemSection: replace SVG route map with live Mapbox GL component
//   • ProductSection: add <AgentDemoPanel> showing agent coordination in real-time
//   • TechSection: add <AgentActivityMonitor> WebSocket event stream
//   • WaitlistSection: wire up handleSubmit to real API endpoint

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustBar from './components/TrustBar'
import ProblemSection from './components/ProblemSection'
import ProductSection from './components/ProductSection'
import TechSection from './components/TechSection'
import VisionSection from './components/VisionSection'
import FounderSection from './components/FounderSection'
import WaitlistSection from './components/WaitlistSection'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      {/* Sticky navigation */}
      <Navbar />

      <main>
        {/* § 1 — Full-viewport hero with animated grid background */}
        <HeroSection />

        {/* § 2 — Trust anchor: "Trusted by schools and parents" */}
        <TrustBar />

        {/* § 3 — Problem statement: the daily school transport visibility gap */}
        <ProblemSection />

        {/* § 4 — Kawan product spotlight + How It Works steps */}
        <ProductSection />

        {/* § 5 — Technical infrastructure credibility */}
        <TechSection />

        {/* § 6 — Cinematic vision statement: the long arc */}
        <VisionSection />

        {/* § 7 — Founder's note: humanises the brand */}
        <FounderSection />

        {/* § 8 — Email waitlist / Early Access CTA */}
        <WaitlistSection />
      </main>

      {/* Site footer */}
      <Footer />
    </>
  )
}
