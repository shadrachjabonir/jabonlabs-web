'use client'

import { useState } from 'react'

// ─── WaitlistSection ──────────────────────────────────────────────────────
// Email capture CTA. Single-focus: one headline, one field, one button.
//
// TODO: Wire up form submission to your backend API or email platform
// (e.g. Resend, Mailchimp, Loops.so). Replace handleSubmit with a real API call.
// Consider adding a CSRF token for production forms.

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    // TODO: Replace with actual API call, e.g.:
    // const res = await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) })
    // Simulate network delay for now
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <section
      id="waitlist"
      className="py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Join the waitlist"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="rounded-2xl p-10 sm:p-14 glow-border bg-card relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,200,255,0.05) 0%, rgba(123,97,255,0.05) 100%), var(--color-card)',
          }}
        >
          {/* Corner glow */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
            style={{ background: 'var(--color-primary)' }}
            aria-hidden="true"
          />

          <p className="text-primary font-heading text-sm uppercase tracking-widest font-semibold mb-4">
            Early Access
          </p>
          <h2
            className="font-heading font-bold text-text-primary mb-3"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
            }}
          >
            Be the first to bring Kawan to your school.
          </h2>
          <p className="text-text-secondary font-body text-base mb-8" style={{ lineHeight: '1.7' }}>
            Join the early access programme. No commitment required.
          </p>

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-success/10 border border-success/30 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10l5 5 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === 'error') setStatus('idle')
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-150"
                    aria-invalid={status === 'error'}
                    aria-describedby={status === 'error' ? 'waitlist-error' : undefined}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 rounded-xl bg-primary text-background font-heading font-semibold text-sm hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-glow-cyan cursor-pointer whitespace-nowrap"
                >
                  {status === 'loading' ? 'Sending…' : 'Request Early Access'}
                </button>
              </div>

              {status === 'error' && (
                <p
                  id="waitlist-error"
                  role="alert"
                  className="mt-2 text-danger font-body text-xs text-left"
                >
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
