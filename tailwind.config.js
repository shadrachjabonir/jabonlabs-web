/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background:       '#FDFCFB',
        surface:          '#F6F3EE',
        card:             '#FFFFFF',
        primary:          '#0D7A6A',
        'primary-dark':   '#0A6156',
        secondary:        '#F59E0B',
        border:           '#E8E3DA',
        'text-primary':   '#1C1714',
        'text-secondary': '#5C5650',
        'text-muted':     '#9E9890',
        success:          '#16A34A',
        danger:           '#DC2626',
        warning:          '#D97706',
        info:             '#0369A1',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-dm-sans)',       'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal':   '0 0 24px rgba(13,122,106,0.20)',
        'glow-amber':  '0 0 24px rgba(245,158,11,0.25)',
        card:          '0 4px 24px rgba(28,23,20,0.08)',
        'card-hover':  '0 8px 40px rgba(28,23,20,0.14)',
        soft:          '0 2px 12px rgba(28,23,20,0.06)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'blob-shift': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':      { transform: 'translate(20px, -15px) scale(1.05)' },
          '66%':      { transform: 'translate(-15px, 10px) scale(0.97)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s ease both',
        'fade-in':    'fade-in 0.5s ease both',
        'blob-shift': 'blob-shift 8s ease-in-out infinite',
        'float':      'float 4s ease-in-out infinite',
        'shimmer':    'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
