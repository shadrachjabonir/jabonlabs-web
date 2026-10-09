/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── Jabon Labs Design Tokens ─────────────────────────────────────────
      // Source: ui-ux-pro-max design system: HUD/Sci-Fi FUI + trustworthy accent
      colors: {
        primary: '#00C8FF',       // Cyan — primary action & highlights
        'primary-dark': '#0090C8',
        secondary: '#7B61FF',     // Violet — secondary accent
        accent: '#00C8FF',        // CTA accent (same as primary for consistency)
        background: '#050510',    // Near-black deep space
        surface: '#0D0D1A',       // Elevated surface
        card: '#101823',          // Card background
        border: '#1E2D3D',        // Subtle borders
        'text-primary': '#F0F4FF',
        'text-secondary': '#94A3B8',
        'text-muted': '#4B5563',
        danger: '#EF4444',
        success: '#10B981',
      },
      fontFamily: {
        // Space Grotesk for headings — tech, bold, futuristic
        // DM Sans for body — clean, readable, approachable
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'section': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(0,200,255,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,200,255,0.04) 1px, transparent 1px)
        `,
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,200,255,0.12) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(16,24,35,0.9) 0%, rgba(13,13,26,0.95) 100%)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,200,255,0.25), 0 0 60px rgba(0,200,255,0.10)',
        'glow-violet': '0 0 20px rgba(123,97,255,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'grid-shift': 'gridShift 20s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gridShift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,200,255,0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(0,200,255,0.50)' },
        },
      },
    },
  },
  plugins: [],
}
