'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function FollowButton({ targetId, initialFollowing }: { targetId: string, initialFollowing: boolean }) {
  const router = useRouter()
  const [following, setFollowing] = useState(initialFollowing)
  const [loading, setLoading] = useState(false)

  async function toggle() {
    setLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/login'); return }

    if (following) {
      await supabase.from('follows').delete().eq('follower_id', user.id).eq('following_id', targetId)
      setFollowing(false)
    } else {
      await supabase.from('follows').insert({ follower_id: user.id, following_id: targetId })
      setFollowing(true)
    }
    setLoading(false)
    router.refresh()
  }

  return (
    <button onClick={toggle} disabled={loading}
      className="px-4 py-2 rounded-xl text-sm font-semibold transition shrink-0 disabled:opacity-50"
      style={following
        ? { background: 'var(--muted)', color: 'var(--foreground)', border: '1px solid var(--border)' }
        : { background: 'var(--primary)', color: 'white' }}>
      {loading ? '...' : following ? 'Following' : 'Follow'}
    </button>
  )
}
