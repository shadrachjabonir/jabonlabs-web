// ─── Icons ────────────────────────────────────────────────────────────────────
// Minimal geometric line glyphs — simple shapes, currentColor, 24×24 viewBox.

type IconProps = { className?: string; style?: React.CSSProperties }

// Concentric circles with slash — No Visibility
export function IconEyeOff({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
      className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" />
      <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" />
    </svg>
  )
}

// Broken route — two line segments with a gap
export function IconRouteDeviation({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
      className={className} style={style} aria-hidden="true">
      <polyline points="3,12 9,12 15,6 21,6" stroke="currentColor" />
      <line x1="9" y1="12" x2="15" y2="18" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="2 2" />
      <circle cx="15" cy="6" r="2" stroke="currentColor" />
    </svg>
  )
}

// Three horizontal lines (list/clipboard)
export function IconClipboardError({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
      className={className} style={style} aria-hidden="true">
      <line x1="5" y1="8"  x2="19" y2="8"  stroke="currentColor" />
      <line x1="5" y1="12" x2="15" y2="12" stroke="currentColor" />
      <line x1="5" y1="16" x2="11" y2="16" stroke="currentColor" />
    </svg>
  )
}

// Simple map pin
export function IconMapPin({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
      className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="10" r="4" stroke="currentColor" />
      <path d="M12 21C12 21 5 15 5 10a7 7 0 0 1 14 0c0 5-7 11-7 11z" stroke="currentColor" />
    </svg>
  )
}

// Three connected dots — AI / network
export function IconAI({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
      className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="5"  r="2.5" stroke="currentColor" />
      <circle cx="5"  cy="17" r="2.5" stroke="currentColor" />
      <circle cx="19" cy="17" r="2.5" stroke="currentColor" />
      <line x1="12" y1="7.5" x2="5"  y2="14.5" stroke="currentColor" />
      <line x1="12" y1="7.5" x2="19" y2="14.5" stroke="currentColor" />
      <line x1="7.5" y1="17" x2="16.5" y2="17" stroke="currentColor" />
    </svg>
  )
}

// Simple bell
export function IconBell({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
      className={className} style={style} aria-hidden="true">
      <path d="M18 10a6 6 0 0 0-12 0c0 4-2 5-2 5h16s-2-1-2-5z" stroke="currentColor" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" />
    </svg>
  )
}

// Hexagon — Kubernetes
export function IconKubernetes({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" stroke="currentColor" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" />
    </svg>
  )
}

// Stacked rectangles — DDD
export function IconDDD({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <rect x="3" y="5"  width="18" height="4" rx="1.5" stroke="currentColor" />
      <rect x="3" y="11" width="18" height="4" rx="1.5" stroke="currentColor" strokeOpacity="0.65" />
      <rect x="3" y="17" width="18" height="2.5" rx="1.5" stroke="currentColor" strokeOpacity="0.35" />
    </svg>
  )
}

// Shield outline — reliability
export function IconShieldLock({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <path d="M12 3L4 7v5c0 4.9 3.5 9.5 8 10.5C17.5 21.5 21 16.9 21 12V7L12 3z" stroke="currentColor" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" />
    </svg>
  )
}

// Concentric circles — Safer Communities
export function IconShieldHeart({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"
      className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Triangle — Smarter Systems
export function IconCircuit({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <polygon points="12,4 21,19 3,19" stroke="currentColor" />
      <line x1="12" y1="10" x2="12" y2="15" stroke="currentColor" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

// Diamond — Broader Impact
export function IconGlobe({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <polygon points="12,3 21,12 12,21 3,12" stroke="currentColor" />
      <polygon points="12,7 17,12 12,17 7,12" stroke="currentColor" strokeOpacity="0.5" />
    </svg>
  )
}

// Video camera — live cabin cam
export function IconCamera({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <rect x="2" y="7" width="15" height="12" rx="2" stroke="currentColor" />
      <path d="M17 11l5-3v8l-5-3V11z" stroke="currentColor" />
      <circle cx="9" cy="13" r="2.5" stroke="currentColor" />
    </svg>
  )
}

// Speech bubble with relay arrow — AI admin mediation
export function IconRelay({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <path d="M4 4h7a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8l-3 2v-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" />
      <path d="M13 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v2l-3-2h-2a2 2 0 0 1-2-2v-1" stroke="currentColor" />
    </svg>
  )
}

// Star/verified badge
export function IconVerified({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} style={style} aria-hidden="true">
      <polygon points="12,3 14.5,8.5 21,9.3 16.5,13.5 17.8,20 12,17 6.2,20 7.5,13.5 3,9.3 9.5,8.5"
        stroke="currentColor" />
    </svg>
  )
}
