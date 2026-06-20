import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { MONEY_NEWS } from '@/lib/money'
import { formatDistanceToNow } from 'date-fns'
import TagPill from '@/components/TagPill'

const HOME_NEWS = [
  MONEY_NEWS.find((n) => n.id === 'spacex-cursor')!,
  MONEY_NEWS.find((n) => n.id === 'abridge-nvidia')!,
  MONEY_NEWS.find((n) => n.id === 'spacex-ipo')!,
  MONEY_NEWS.find((n) => n.id === 'openai-ipo')!,
  MONEY_NEWS.find((n) => n.id === 'anthropic-ipo')!,
  MONEY_NEWS.find((n) => n.id === 'deepseek-funding')!,
  MONEY_NEWS.find((n) => n.id === 'li-ka-shing-autobiography')!,
]

export default async function Home() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from('posts')
    .select('*, profiles(full_name, avatar), likes(count), comments(count)')
    .order('created_at', { ascending: false })
    .limit(10)

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome */}
      <div className="rounded-2xl p-8 text-center"
        style={{ background: 'linear-gradient(135deg, #fed7aa, #fef3c7)' }}>
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
          Find Buddie, Find Life! 🌻
        </h1>
        <p className="text-base leading-relaxed max-w-xl mx-auto mb-4" style={{ color: '#92400e' }}>
          Hopefully, Buddie will make you smart, successful and happy.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/signup"
            className="px-5 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition"
            style={{ background: 'var(--primary)' }}>
            Join Buddie
          </Link>
          <Link href="/new"
            className="px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-80 transition"
            style={{ background: 'white', color: 'var(--primary)' }}>
            Share something
          </Link>
        </div>
      </div>

      {/* Community Feed */}
      {posts && posts.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Community Feed</h2>
            <Link href="/new" className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
              + Post
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {posts.map((post: any) => (
              <div key={post.id} className="card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0"
                    style={{ background: 'var(--muted)' }}>
                    {post.profiles?.avatar || '🌻'}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{post.profiles?.full_name}</p>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>
                      {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-2">{post.content}</p>
                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((t: string) => <TagPill key={t} tag={t} />)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* News */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Latest News</h2>
          <Link href="/money" className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
            See all →
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {HOME_NEWS.map((item) => (
            <Link key={item.id} href={`/money/${item.id}`}>
              <div className="card p-4 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: 'var(--muted)' }}>
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-0.5">{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{item.summary}</p>
                  <p className="text-xs mt-1.5 font-medium" style={{ color: 'var(--primary)' }}>Read full article →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="card p-6 text-center text-sm" style={{ color: '#6b7280' }}>
        <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Contact the Webmaster</p>
        <p>Xiang-Jiao Yang —{' '}
          <a href="mailto:xiang-jiao.yang@mcgill.ca" className="hover:underline" style={{ color: 'var(--primary)' }}>
            xiang-jiao.yang@mcgill.ca
          </a>
        </p>
      </div>
    </div>
  )
}
