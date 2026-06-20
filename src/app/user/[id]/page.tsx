import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import TagPill from '@/components/TagPill'
import FollowButton from './FollowButton'

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: profile } = await supabase
    .from('profiles').select('*').eq('id', id).single()

  if (!profile) notFound()

  const { data: { user } } = await supabase.auth.getUser()

  const { data: posts } = await supabase
    .from('posts').select('*').eq('author_id', id).order('created_at', { ascending: false })

  const { data: followersData } = await supabase
    .from('follows').select('id', { count: 'exact' }).eq('following_id', id)

  const { data: followingData } = await supabase
    .from('follows').select('id', { count: 'exact' }).eq('follower_id', id)

  const { data: isFollowing } = user
    ? await supabase.from('follows').select('id').eq('follower_id', user.id).eq('following_id', id).single()
    : { data: null }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0"
            style={{ background: 'var(--muted)' }}>
            {profile.avatar || '🌻'}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold">{profile.full_name}</h1>
              {profile.can_post && (
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#dcfce7', color: '#16a34a' }}>✓ Verified</span>
              )}
            </div>
            {profile.location && <p className="text-sm" style={{ color: '#9ca3af' }}>📍 {profile.location}</p>}
            {profile.bio && <p className="text-sm mt-1 leading-relaxed" style={{ color: '#6b7280' }}>{profile.bio}</p>}
            {profile.interests?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {profile.interests.map((i: string) => <TagPill key={i} tag={i} />)}
              </div>
            )}
            <div className="flex gap-6 text-sm mt-3">
              <div><span className="font-bold">{followingData?.length ?? 0}</span> <span style={{ color: '#9ca3af' }}>following</span></div>
              <div><span className="font-bold">{followersData?.length ?? 0}</span> <span style={{ color: '#9ca3af' }}>followers</span></div>
              <div><span className="font-bold">{posts?.length ?? 0}</span> <span style={{ color: '#9ca3af' }}>posts</span></div>
            </div>
          </div>
          {user?.id !== id && user && (
            <FollowButton targetId={id} initialFollowing={!!isFollowing} />
          )}
        </div>
      </div>

      <h2 className="font-semibold mb-3">Posts</h2>
      {posts && posts.length > 0 ? (
        <div className="flex flex-col gap-3">
          {posts.map((post: any) => (
            <div key={post.id} className="card p-4">
              <p className="text-sm leading-relaxed mb-2">{post.content}</p>
              {post.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {post.tags.map((t: string) => <TagPill key={t} tag={t} />)}
                </div>
              )}
              <p className="text-xs" style={{ color: '#9ca3af' }}>
                {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="card p-10 text-center" style={{ color: '#9ca3af' }}><p>No posts yet.</p></div>
      )}
    </div>
  )
}
