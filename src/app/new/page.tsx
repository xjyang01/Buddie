'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const SUGGESTED_TAGS = ['hiking', 'music', 'food', 'art', 'books', 'gaming', 'travel', 'fitness', 'coffee', 'events', 'science', 'coding', 'photography', 'yoga', 'movies']

export default function NewPostPage() {
  const router = useRouter()
  const [content, setContent] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [customTag, setCustomTag] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function toggleTag(tag: string) {
    setTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  function addCustomTag() {
    const t = customTag.trim().toLowerCase().replace(/\s+/g, '-')
    if (t && !tags.includes(t)) setTags(prev => [...prev, t])
    setCustomTag('')
  }

  async function handleSubmit() {
    if (!content.trim()) return
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push('/login')
      return
    }

    const { error } = await supabase.from('posts').insert({
      author_id: user.id,
      content: content.trim(),
      tags,
    })

    if (error) { setError(error.message); setLoading(false) }
    else router.push('/')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Share something 🌻</h1>
      <div className="card p-6 flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">What's on your mind?</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value.slice(0, 500))}
            placeholder="Looking for hiking buddies, starting a book club, hosting a dinner... anything goes!"
            rows={5}
            className="w-full rounded-xl p-3 text-sm resize-none outline-none focus:ring-2"
            style={{ border: '1px solid var(--border)', background: 'var(--background)' }}
          />
          <p className="text-xs mt-1 text-right" style={{ color: content.length > 450 ? '#ef4444' : '#9ca3af' }}>
            {content.length}/500
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Add tags</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {SUGGESTED_TAGS.map(tag => (
              <button key={tag} type="button" onClick={() => toggleTag(tag)}
                className="text-xs px-3 py-1.5 rounded-full font-medium transition"
                style={tags.includes(tag)
                  ? { background: 'var(--primary)', color: 'white' }
                  : { background: 'var(--muted)', color: 'var(--foreground)' }}>
                #{tag}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={customTag}
              onChange={e => setCustomTag(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addCustomTag()}
              placeholder="Add custom tag..."
              className="flex-1 rounded-xl px-3 py-2 text-sm outline-none"
              style={{ border: '1px solid var(--border)', background: 'var(--background)' }}
            />
            <button onClick={addCustomTag} type="button"
              className="px-4 py-2 rounded-xl text-sm font-medium"
              style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
              Add
            </button>
          </div>
        </div>

        {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}

        <div className="flex gap-3 pt-2">
          <button onClick={() => router.back()}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium border"
            style={{ borderColor: 'var(--border)' }}>
            Cancel
          </button>
          <button onClick={handleSubmit} disabled={!content.trim() || loading}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition disabled:opacity-40"
            style={{ background: 'var(--primary)' }}>
            {loading ? 'Posting...' : 'Post to Buddie 🌻'}
          </button>
        </div>
      </div>
    </div>
  )
}
