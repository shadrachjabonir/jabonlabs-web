// ─── ProblemSection ───────────────────────────────────────────────────────
// Establishes the pain point empathetically before introducing the solution.
// Tone: concerned parent, not alarming statistics.

const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'No real-time visibility',
    body: 'Most parents receive no updates from pickup to school drop-off. A 45-minute journey becomes 45 minutes of uncertainty.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Unverified handoffs',
    body: 'Who collected your child at the gate? Paper sign-out sheets and word-of-mouth cannot confirm who took responsibility at every transfer point.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Delayed or absent alerts',
    body: 'When something goes wrong — a delayed bus, a route change, a missed handoff — parents and administrators find out too late, if at all.',
  },
]

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      aria-label="The problem"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── Text Side ── */}
        <div>
          <p className="text-primary font-heading text-sm uppercase tracking-widest font-semibold mb-4">
            The Problem
          </p>
          <h2
            className="font-heading font-bold text-text-primary mb-6"
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
            }}
          >
            Every day, 300 million children travel to school.{' '}
            <span className="text-text-secondary">
              Most parents have no idea if they arrived safely.
            </span>
          </h2>
          <p className="text-text-secondary font-body text-base mb-8" style={{ lineHeight: '1.75' }}>
            School transport involves a chain of handoffs — from home to escort to bus to school gate
            and back. Each link in that chain carries risk, and today, most of that chain is invisible
            to the people who care most: parents and school administrators.
          </p>

          {/* Pain point list */}
          <ul className="space-y-6" role="list">
            {painPoints.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-card glow-border flex items-center justify-center text-text-secondary">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary text-sm mb-1">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary font-body text-sm" style={{ lineHeight: '1.6' }}>
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Visual Side — Route Diagram ── */}
        {/*
          TODO (AI integration point): Replace this static SVG with a live map
          component (e.g. Mapbox GL or react-leaflet) showing a real-time
          anonymised route with AI anomaly markers.
        */}
        <div className="relative flex items-center justify-center">
          <div className="w-full max-w-md rounded-2xl glow-border bg-card p-8">
            <svg
              viewBox="0 0 320 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              aria-label="Route diagram showing home to school journey with checkpoints"
            >
              {/* Route line */}
              <path
                d="M60 220 C60 220 80 120 160 100 C240 80 260 60 260 60"
                stroke="#1E2D3D"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                d="M60 220 C60 220 80 120 160 100 C240 80 260 60 260 60"
                stroke="url(#routeGrad)"
                strokeWidth="2"
                opacity="0.6"
              />

              {/* Home marker */}
              <circle cx="60" cy="220" r="12" fill="#101823" stroke="#00C8FF" strokeWidth="1.5" />
              <text x="60" y="225" textAnchor="middle" fontSize="10" fill="#00C8FF">⌂</text>
              <text x="60" y="244" textAnchor="middle" fontSize="10" fill="#94A3B8">Home</text>

              {/* Checkpoint 1 */}
              <circle cx="120" cy="170" r="8" fill="#101823" stroke="#7B61FF" strokeWidth="1.5" />
              <circle cx="120" cy="170" r="3" fill="#7B61FF" />
              <text x="138" y="174" fontSize="9" fill="#94A3B8">Pickup ✓</text>

              {/* Checkpoint 2 */}
              <circle cx="190" cy="118" r="8" fill="#101823" stroke="#7B61FF" strokeWidth="1.5" />
              <circle cx="190" cy="118" r="3" fill="#7B61FF" />
              <text x="208" y="122" fontSize="9" fill="#94A3B8">En route ✓</text>

              {/* School marker */}
              <circle cx="260" cy="60" r="12" fill="#101823" stroke="#10B981" strokeWidth="1.5" />
              <text x="260" y="65" textAnchor="middle" fontSize="9" fill="#10B981">✓</text>
              <text x="260" y="84" textAnchor="middle" fontSize="10" fill="#94A3B8">School</text>

              {/* AI anomaly marker — off route */}
              <circle cx="230" cy="145" r="6" fill="#EF4444" opacity="0.8" />
              <text x="246" y="149" fontSize="8" fill="#EF4444">Route deviation!</text>
              <line x1="190" y1="118" x2="230" y2="145" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

              <defs>
                <linearGradient id="routeGrad" x1="60" y1="220" x2="260" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7B61FF" />
                  <stop offset="1" stopColor="#00C8FF" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-center text-text-muted text-xs font-body mt-4">
              AI detects route deviations and alerts guardians instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
