'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function JobPostForm() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '', company: '', location: '', job_type: 'Full-time',
    description: '', apply_url: '', tags: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setError('Not logged in'); setLoading(false); return }

    const tags = form.tags.split(',').map(t => t.trim()).filter(Boolean)

    const { error } = await supabase.from('job_postings').insert({
      poster_id: user.id,
      title: form.title,
      company: form.company,
      location: form.location,
      job_type: form.job_type,
      description: form.description,
      apply_url: form.apply_url || null,
      tags,
    })

    if (error) { setError(error.message); setLoading(false) }
    else router.push('/jobs')
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Job Title</label>
          <input type="text" required placeholder="e.g. Senior Software Engineer"
            className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
            style={{ borderColor: '#e5e7eb' }}
            value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <input type="text" required placeholder="Your company name"
            className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
            style={{ borderColor: '#e5e7eb' }}
            value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input type="text" required placeholder="e.g. Montreal, QC / Remote"
            className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
            style={{ borderColor: '#e5e7eb' }}
            value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Job Type</label>
          <select className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
            style={{ borderColor: '#e5e7eb' }}
            value={form.job_type} onChange={e => setForm(f => ({ ...f, job_type: e.target.value }))}>
            {['Full-time', 'Part-time', 'Contract', 'Internship', 'Hybrid', 'Remote'].map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Apply URL (optional)</label>
          <input type="url" placeholder="https://..."
            className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
            style={{ borderColor: '#e5e7eb' }}
            value={form.apply_url} onChange={e => setForm(f => ({ ...f, apply_url: e.target.value }))} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Job Description</label>
        <textarea required rows={5} placeholder="Describe the role, responsibilities, and requirements..."
          className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
          style={{ borderColor: '#e5e7eb' }}
          value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Tags (comma-separated)</label>
        <input type="text" placeholder="e.g. React, Python, Remote, AI"
          className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
          style={{ borderColor: '#e5e7eb' }}
          value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))} />
      </div>
      {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}
      <button type="submit" disabled={loading}
        className="w-full py-2 rounded-xl font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        style={{ background: 'var(--primary)' }}>
        {loading ? 'Publishing...' : 'Publish Job Listing'}
      </button>
    </form>
  )
}
