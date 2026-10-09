// ─── Icons ────────────────────────────────────────────────────────────────────
// Custom inline SVG icons — stroke-based, 24×24 viewBox, currentColor,
// warm teal/amber palette. Subtle animations respect reduced-motion.

type IconProps = { className?: string; style?: React.CSSProperties }

// Map pin with a pulsing ring
export function IconMapPin({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      {/* Pulsing ring */}
      <circle cx="12" cy="10" r="7" stroke="currentColor" strokeOpacity="0.2"
        className="origin-center animate-ping" style={{ animationDuration: '2.4s' }} />
      {/* Pin body */}
      <path d="M12 21C12 21 5 14.5 5 10a7 7 0 1 1 14 0c0 4.5-7 11-7 11z" stroke="currentColor" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" />
    </svg>
  )
}

// Eye crossed out (no visibility)
export function IconEyeOff({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <path d="M2 12s3-7 10-7c2.12 0 3.96.6 5.5 1.5" stroke="currentColor" />
      <path d="M17.5 7.5C19.42 9 21 11 22 12c-1 1-2.58 3-4.5 4.5" stroke="currentColor" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4" stroke="currentColor" />
      <path d="M14.12 14.12A3 3 0 1 1 9.88 9.88" stroke="currentColor" />
      <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" />
    </svg>
  )
}

// Route deviation — path veers off, with animated dash
export function IconRouteDeviation({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      {/* Main route */}
      <path d="M3 12h7" stroke="currentColor" />
      {/* Deviation branch */}
      <path d="M10 12 Q14 12 14 8 Q14 4 18 4" stroke="currentColor"
        strokeDasharray="4 2"
        style={{ strokeDashoffset: 0, animation: 'dashMove 3s linear infinite' }} />
      {/* Warning at deviation */}
      <circle cx="18" cy="4" r="2.5" stroke="#F59E0B" fill="#FEF3C7" />
      <line x1="18" y1="3" x2="18" y2="4.5" stroke="#D97706" strokeWidth="1.2" />
      <circle cx="18" cy="5.8" r="0.4" fill="#D97706" />
      {/* Continued flat correct route */}
      <path d="M10 12h11" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="2 3" />
    </svg>
  )
}

// Clipboard with a red cross (error-prone manual attendance)
export function IconClipboardError({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" />
      <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V4z" stroke="currentColor" />
      <line x1="9" y1="10" x2="15" y2="10" stroke="currentColor" />
      <line x1="9" y1="14" x2="13" y2="14" stroke="currentColor" />
      {/* Red X badge */}
      <circle cx="17" cy="17" r="3.5" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" />
      <line x1="15.5" y1="15.5" x2="18.5" y2="18.5" stroke="#EF4444" strokeWidth="1.3" />
      <line x1="18.5" y1="15.5" x2="15.5" y2="18.5" stroke="#EF4444" strokeWidth="1.3" />
    </svg>
  )
}

// AI brain / neural network nodes
export function IconAI({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      {/* Central node */}
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" />
      {/* Satellite nodes */}
      <circle cx="5" cy="8"  r="2" stroke="currentColor" />
      <circle cx="19" cy="8"  r="2" stroke="currentColor" />
      <circle cx="5" cy="16" r="2" stroke="currentColor" />
      <circle cx="19" cy="16" r="2" stroke="currentColor" />
      {/* Connections */}
      <line x1="7"  y1="8.8"  x2="9.7"  y2="11"   stroke="currentColor" strokeOpacity="0.6" />
      <line x1="17" y1="8.8"  x2="14.3" y2="11"   stroke="currentColor" strokeOpacity="0.6" />
      <line x1="7"  y1="15.2" x2="9.7"  y2="13"   stroke="currentColor" strokeOpacity="0.6" />
      <line x1="17" y1="15.2" x2="14.3" y2="13"   stroke="currentColor" strokeOpacity="0.6" />
    </svg>
  )
}

// Bell with ripple (instant alerts)
export function IconBell({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      {/* Ripple arc */}
      <path d="M5.5 5.5A8.38 8.38 0 0 0 3.5 11" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M18.5 5.5A8.38 8.38 0 0 1 20.5 11" stroke="currentColor" strokeOpacity="0.3" />
      {/* Bell */}
      <path d="M18 10a6 6 0 0 0-12 0c0 4-2 5-2 5h16s-2-1-2-5z" stroke="currentColor" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" />
    </svg>
  )
}

// Kubernetes hexagon wheel
export function IconKubernetes({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      {/* Outer hexagon */}
      <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" stroke="currentColor" />
      {/* Spokes */}
      <line x1="12" y1="2"  x2="12" y2="8"  stroke="currentColor" strokeOpacity="0.5" />
      <line x1="20" y1="7"  x2="15" y2="10" stroke="currentColor" strokeOpacity="0.5" />
      <line x1="20" y1="17" x2="15" y2="14" stroke="currentColor" strokeOpacity="0.5" />
      <line x1="12" y1="22" x2="12" y2="16" stroke="currentColor" strokeOpacity="0.5" />
      <line x1="4"  y1="17" x2="9"  y2="14" stroke="currentColor" strokeOpacity="0.5" />
      <line x1="4"  y1="7"  x2="9"  y2="10" stroke="currentColor" strokeOpacity="0.5" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" />
    </svg>
  )
}

// DDD — layered architecture (domain boxes)
export function IconDDD({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      {/* Three stacked layers */}
      <rect x="3" y="4"  width="18" height="4" rx="1.5" stroke="currentColor" />
      <rect x="3" y="10" width="18" height="4" rx="1.5" stroke="currentColor" strokeOpacity="0.7" />
      <rect x="3" y="16" width="18" height="4" rx="1.5" stroke="currentColor" strokeOpacity="0.4" />
      {/* Labels as dots */}
      <circle cx="7" cy="6"  r="1" fill="currentColor" />
      <circle cx="7" cy="12" r="1" fill="currentColor" fillOpacity="0.7" />
      <circle cx="7" cy="18" r="1" fill="currentColor" fillOpacity="0.4" />
    </svg>
  )
}

// Shield lock (enterprise reliability)
export function IconShieldLock({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" stroke="currentColor" />
      <rect x="9" y="11" width="6" height="5" rx="1" stroke="currentColor" />
      <path d="M12 8a2 2 0 0 1 2 2v1H10v-1a2 2 0 0 1 2-2z" stroke="currentColor" />
    </svg>
  )
}

// Safer communities — shield with heart
export function IconShieldHeart({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" stroke="currentColor" />
      <path d="M9.5 10.5a2.5 2.5 0 0 1 5 0c0 2-2.5 4-2.5 4s-2.5-2-2.5-4z" stroke="currentColor" fill="currentColor" fillOpacity="0.15" />
    </svg>
  )
}

// Smarter systems — circuit / connected nodes
export function IconCircuit({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <circle cx="5"  cy="5"  r="2" stroke="currentColor" />
      <circle cx="19" cy="5"  r="2" stroke="currentColor" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" />
      <circle cx="5"  cy="19" r="2" stroke="currentColor" />
      <circle cx="19" cy="19" r="2" stroke="currentColor" />
      <path d="M7 5h10M5 7v10M19 7v10M7 19h10" stroke="currentColor" strokeOpacity="0.4" />
      <line x1="7"  y1="5.8"  x2="10" y2="11" stroke="currentColor" strokeOpacity="0.7" />
      <line x1="17" y1="5.8"  x2="14" y2="11" stroke="currentColor" strokeOpacity="0.7" />
      <line x1="7"  y1="18.2" x2="10" y2="13" stroke="currentColor" strokeOpacity="0.7" />
      <line x1="17" y1="18.2" x2="14" y2="13" stroke="currentColor" strokeOpacity="0.7" />
    </svg>
  )
}

// Broader impact — globe with latitude/longitude lines
export function IconGlobe({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" />
      {/* Latitude */}
      <path d="M3 12h18" stroke="currentColor" strokeOpacity="0.4" />
      <path d="M4.5 7.5h15" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M4.5 16.5h15" stroke="currentColor" strokeOpacity="0.3" />
      {/* Longitude (vertical ellipse) */}
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeOpacity="0.5" />
    </svg>
  )
}

// Verified checkmark (TrustBar)
export function IconVerified({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <path d="M12 2l2.4 3.6L18 4.8l.4 4 3.6 1.2-2 3.4 2 3.4-3.6 1.2-.4 4-3.6-1.6L12 22l-2.4-3.6L6 19.2l-.4-4-3.6-1.2 2-3.4-2-3.4 3.6-1.2.4-4 3.6 1.6L12 2z"
        stroke="currentColor" />
      <path d="M8.5 12l2.5 2.5 4.5-5" stroke="currentColor" />
    </svg>
  )
}
