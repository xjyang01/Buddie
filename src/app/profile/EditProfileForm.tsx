'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

const AVATARS = ['🌻', '😊', '🎸', '📚', '🍜', '🎨', '🧗', '🎮', '✈️', '🌸', '🦋', '🐬', '🦊', '🌙', '⭐', '🎯']
const INTEREST_SUGGESTIONS = ['hiking', 'music', 'food', 'art', 'books', 'gaming', 'travel', 'fitness', 'coffee', 'photography', 'coding', 'science', 'movies', 'cooking', 'yoga', 'cycling']

export default function EditProfileForm({ profile }: { profile: any }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    full_name: profile?.full_name || '',
    bio: profile?.bio || '',
    location: profile?.location || '',
    avatar: profile?.avatar || '🌻',
    interests: profile?.interests || [],
    website: profile?.website || '',
  })
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  function toggleInterest(i: string) {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(i) ? f.interests.filter((x: string) => x !== i) : [...f.interests, i]
    }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from('profiles').update(form).eq('id', user.id)
    setSaved(true)
    setLoading(false)
    setTimeout(() => { setSaved(false); setOpen(false); router.refresh() }, 1000)
  }

  if (!open) return (
    <button onClick={() => setOpen(true)}
      className="text-sm font-medium px-4 py-2 rounded-xl border hover:bg-gray-50 transition"
      style={{ borderColor: 'var(--border)' }}>
      Edit Profile
    </button>
  )

  return (
    <form onSubmit={handleSave} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">Avatar</label>
        <div className="flex flex-wrap gap-2">
          {AVATARS.map(a => (
            <button key={a} type="button" onClick={() => setForm(f => ({ ...f, avatar: a }))}
              className={`w-10 h-10 rounded-full text-xl flex items-center justify-center transition ${form.avatar === a ? 'ring-2 ring-offset-1' : ''}`}
              style={{ background: 'var(--muted)' }}>
              {a}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" required
            className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
            style={{ borderColor: '#e5e7eb' }}
            value={form.full_name} onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input type="text" placeholder="e.g. Montreal, QC"
            className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2"
            style={{ borderColor: '#e5e7eb' }}
            value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Bio</label>
        <textarea rows={3} placeholder="Tell the community about yourself..."
          className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 resize-none"
          style={{ borderColor: '#e5e7eb' }}
          value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Interests</label>
        <div className="flex flex-wrap gap-2">
          {INTEREST_SUGGESTIONS.map(i => (
            <button key={i} type="button" onClick={() => toggleInterest(i)}
              className="text-xs px-3 py-1.5 rounded-full font-medium transition"
              style={form.interests.includes(i)
                ? { background: 'var(--primary)', color: 'white' }
                : { background: 'var(--muted)', color: 'var(--foreground)' }}>
              #{i}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <button type="button" onClick={() => setOpen(false)}
          className="flex-1 py-2 rounded-xl text-sm border hover:bg-gray-50 transition"
          style={{ borderColor: 'var(--border)' }}>
          Cancel
        </button>
        <button type="submit" disabled={loading}
          className="flex-1 py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          style={{ background: 'var(--primary)' }}>
          {saved ? 'Saved ✓' : loading ? 'Saving...' : 'Save Profile'}
        </button>
      </div>
    </form>
  )
}
