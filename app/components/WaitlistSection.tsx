'use client'

import { useState } from 'react'

export default function WaitlistSection() {
  const [email,    setEmail]  = useState('')
  const [status,   setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setError]  = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setError('')
    // TODO: Replace with real API — e.g. POST /api/waitlist
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <section
      id="waitlist"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(160deg, #F0FDF9 0%, #FDFCFB 50%, #FFFBEB 100%)' }}
      aria-label="Join the waitlist"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="reveal rounded-2xl p-10 sm:p-14 bg-white relative overflow-hidden"
          style={{ boxShadow: '0 8px 48px rgba(13,122,106,0.12)', border: '1px solid #E8E3DA' }}
        >
          {/* Warm accent blob */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #A7F3D0, #6EE7B7)' }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full opacity-25 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #FDE68A, #FCD34D)' }}
            aria-hidden="true"
          />

          <p className="font-heading text-sm uppercase tracking-widest font-semibold mb-4"
             style={{ color: 'var(--color-primary)' }}>
            Early Access
          </p>
          <h2
            className="font-heading font-bold text-text-primary mb-3"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.2', letterSpacing: '-0.01em' }}
          >
            Be the first to bring Kawan to your school.
          </h2>
          <p className="text-text-secondary font-body text-base mb-8" style={{ lineHeight: '1.7' }}>
            Join the early access programme. No commitment required.
          </p>

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: '#D1FAE5', border: '1px solid #A7F3D0' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10l5 5 7-7" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-heading font-semibold text-text-primary">You&rsquo;re on the list.</p>
              <p className="text-text-secondary font-body text-sm">
                We&rsquo;ll be in touch at <strong className="text-text-primary">{email}</strong> when early access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="waitlist-email" className="sr-only">Email address</label>
                  <input
                    id="waitlist-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-all duration-150"
                    style={{
                      background: 'var(--color-surface)',
                      border: `1px solid ${status === 'error' ? '#DC2626' : '#E8E3DA'}`,
                      boxShadow: status === 'error' ? '0 0 0 3px rgba(220,38,38,0.1)' : undefined,
                    }}
                    aria-invalid={status === 'error'}
                    aria-describedby={status === 'error' ? 'waitlist-error' : undefined}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 whitespace-nowrap"
                  style={{ background: 'var(--color-primary)', boxShadow: '0 4px 16px rgba(13,122,106,0.25)' }}
                >
                  {status === 'loading' ? 'Sending…' : 'Request Early Access'}
                </button>
              </div>

              {status === 'error' && (
                <p id="waitlist-error" role="alert" className="mt-2 font-body text-xs text-left" style={{ color: '#DC2626' }}>
                  {errorMsg}
                </p>
              )}

              <p className="mt-4 text-text-muted font-body text-xs">
                We respect your inbox. Unsubscribe anytime. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
