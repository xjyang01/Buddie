'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function VerifyPhonePage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function sendOtp(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/verify/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    })
    const data = await res.json()
    if (res.ok) { setStep('otp') }
    else { setError(data.error || 'Failed to send code') }
    setLoading(false)
  }

  async function verifyOtp(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/verify/confirm-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, otp }),
    })
    const data = await res.json()
    if (res.ok) { router.push('/account') }
    else { setError(data.error || 'Invalid code') }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full card p-8">
        <div className="text-3xl mb-4">📱</div>
        <h1 className="text-xl font-bold mb-1">Verify your phone</h1>
        <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>
          We'll send a 6-digit code to confirm your number. This is the last step before you can post jobs.
        </p>

        {step === 'phone' ? (
          <form onSubmit={sendOtp} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" required
                placeholder="+15141234567"
                className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: '#e5e7eb' }}
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Include country code, e.g. +1 for Canada/US</p>
            </div>
            {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
              style={{ background: 'var(--primary)' }}>
              {loading ? 'Sending...' : 'Send Verification Code'}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp} className="flex flex-col gap-4">
            <p className="text-sm" style={{ color: '#6b7280' }}>
              Code sent to <strong>{phone}</strong>
            </p>
            <div>
              <label className="block text-sm font-medium mb-1">6-Digit Code</label>
              <input type="text" required maxLength={6} pattern="\d{6}"
                placeholder="123456"
                className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 text-center text-xl tracking-widest"
                style={{ borderColor: '#e5e7eb' }}
                value={otp}
                onChange={e => setOtp(e.target.value)}
              />
            </div>
            {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
              style={{ background: 'var(--primary)' }}>
              {loading ? 'Verifying...' : 'Verify Code'}
            </button>
            <button type="button" onClick={() => setStep('phone')}
              className="text-sm text-center hover:underline" style={{ color: '#9ca3af' }}>
              Use a different number
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
