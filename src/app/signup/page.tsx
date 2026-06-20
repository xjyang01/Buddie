'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { isCompanyEmail } from '@/lib/free-email-domains'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [form, setForm] = useState({ full_name: '', email: '', password: '', company_name: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!isCompanyEmail(form.email)) {
      setError('Please use a company or institution email address (not Gmail, Hotmail, Yahoo, etc.)')
      return
    }

    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { full_name: form.full_name, company_name: form.company_name },
        emailRedirectTo: `${window.location.origin}/account/verify-phone`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full card p-8 text-center">
          <div className="text-4xl mb-4">📧</div>
          <h2 className="text-xl font-bold mb-2">Check your email</h2>
          <p className="text-sm mb-1" style={{ color: '#6b7280' }}>
            We sent a verification link to <strong>{form.email}</strong>
          </p>
          <p className="text-sm" style={{ color: '#6b7280' }}>
            Click the link to verify your email, then you'll set up phone verification.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full card p-8">
        <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--primary)' }}>Join Buddie</h1>
        <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>Create an account to post jobs and connect</p>

        <div className="rounded-xl p-4 mb-6 text-sm" style={{ background: 'var(--muted)', color: '#6b7280' }}>
          <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Verification required to post</p>
          <p>A company/institution email + phone number are required to post job listings. This keeps Buddie spam-free.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" required
              className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: '#e5e7eb' }}
              value={form.full_name}
              onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company / Institution Email</label>
            <input type="email" required
              placeholder="you@yourcompany.com"
              className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: '#e5e7eb' }}
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
            <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>Personal emails (Gmail, Hotmail, etc.) are not accepted</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company / Organization Name</label>
            <input type="text" required
              className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: '#e5e7eb' }}
              value={form.company_name}
              onChange={e => setForm(f => ({ ...f, company_name: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" required minLength={6}
              className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: '#e5e7eb' }}
              value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
            />
          </div>
          {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
            style={{ background: 'var(--primary)' }}>
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center" style={{ color: '#9ca3af' }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: 'var(--primary)' }} className="hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
