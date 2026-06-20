import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import TagPill from '@/components/TagPill'
import EditProfileForm from './EditProfileForm'

export default async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const { data: posts } = await supabase
    .from('posts')
    .select('*, likes(count), comments(count)')
    .eq('author_id', user.id)
    .order('created_at', { ascending: false })

  const { data: followersData } = await supabase
    .from('follows')
    .select('id', { count: 'exact' })
    .eq('following_id', user.id)

  const { data: followingData } = await supabase
    .from('follows')
    .select('id', { count: 'exact' })
    .eq('follower_id', user.id)

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0"
            style={{ background: 'var(--muted)' }}>
            {profile?.avatar || '🌻'}
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{profile?.full_name}</h1>
            {profile?.location && <p className="text-sm" style={{ color: '#9ca3af' }}>📍 {profile.location}</p>}
            {profile?.bio && <p className="text-sm mt-1 leading-relaxed" style={{ color: '#6b7280' }}>{profile.bio}</p>}
            {profile?.interests && profile.interests.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {profile.interests.map((i: string) => <TagPill key={i} tag={i} />)}
              </div>
            )}
            <div className="flex gap-6 text-sm mt-3">
              <div><span className="font-bold">{followingData?.length ?? 0}</span> <span style={{ color: '#9ca3af' }}>following</span></div>
              <div><span className="font-bold">{followersData?.length ?? 0}</span> <span style={{ color: '#9ca3af' }}>followers</span></div>
              <div><span className="font-bold">{posts?.length ?? 0}</span> <span style={{ color: '#9ca3af' }}>posts</span></div>
            </div>
            {profile?.can_post && (
              <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#dcfce7', color: '#16a34a' }}>
                ✓ Verified
              </span>
            )}
          </div>
        </div>
        <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          <EditProfileForm profile={profile} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold">Your Posts</h2>
        <Link href="/new"
          className="text-sm font-medium px-3 py-1.5 rounded-xl text-white hover:opacity-90 transition"
          style={{ background: 'var(--primary)' }}>
          + New Post
        </Link>
      </div>

      {posts && posts.length > 0 ? (
        <div className="flex flex-col gap-4">
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
        <div className="card p-10 text-center" style={{ color: '#9ca3af' }}>
          <p className="text-4xl mb-3">🌱</p>
          <p className="mb-3">No posts yet. Share something to get started!</p>
          <Link href="/new" className="text-sm font-medium hover:underline" style={{ color: 'var(--primary)' }}>
            Write your first post →
          </Link>
        </div>
      )}
    </div>
  )
}
