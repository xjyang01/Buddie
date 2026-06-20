'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword(form)
    if (error) { setError(error.message); setLoading(false) }
    else router.push('/account')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full card p-8">
        <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--primary)' }}>Sign In</h1>
        <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>Welcome back to Buddie</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" required
              className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: '#e5e7eb' }}
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" required
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
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center" style={{ color: '#9ca3af' }}>
          No account?{' '}
          <Link href="/signup" style={{ color: 'var(--primary)' }} className="hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  )
}
