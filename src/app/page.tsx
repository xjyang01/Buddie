export const revalidate = 60

import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { MONEY_NEWS } from '@/lib/money'
import { formatDistanceToNow } from 'date-fns'
import TagPill from '@/components/TagPill'

const HOME_NEWS = [
  MONEY_NEWS.find((n) => n.id === 'fugu-user-reactions')!,
  MONEY_NEWS.find((n) => n.id === 'spacex-cursor')!,
  MONEY_NEWS.find((n) => n.id === 'china-housing')!,
  MONEY_NEWS.find((n) => n.id === 'abridge-nvidia')!,
  MONEY_NEWS.find((n) => n.id === 'spacex-ipo')!,
  MONEY_NEWS.find((n) => n.id === 'openai-ipo')!,
  MONEY_NEWS.find((n) => n.id === 'anthropic-ipo')!,
  MONEY_NEWS.find((n) => n.id === 'deepseek-funding')!,
  MONEY_NEWS.find((n) => n.id === 'li-ka-shing-autobiography')!,
]

type Post = {
  id: string
  content: string
  tags: string[]
  created_at: string
  post_country: string | null
  post_region: string | null
  post_city: string | null
  profiles: { full_name: string; avatar: string } | null
}

type LocationGroup = {
  country: string
  regions: { region: string; cities: { city: string; posts: Post[] }[] }[]
}

function groupByLocation(posts: Post[]): { located: LocationGroup[]; unlocated: Post[] } {
  const unlocated: Post[] = []
  const map: Record<string, Record<string, Record<string, Post[]>>> = {}

  for (const post of posts) {
    if (!post.post_country) { unlocated.push(post); continue }
    const c = post.post_country, r = post.post_region || 'Other', ci = post.post_city || 'Other'
    map[c] ??= {}; map[c][r] ??= {}; map[c][r][ci] ??= []
    map[c][r][ci].push(post)
  }

  const located: LocationGroup[] = Object.entries(map).map(([country, regions]) => ({
    country,
    regions: Object.entries(regions).map(([region, cities]) => ({
      region,
      cities: Object.entries(cities).map(([city, posts]) => ({ city, posts })),
    })),
  }))

  return { located, unlocated }
}

function PostCard({ post }: { post: Post }) {
  return (
    <div className="card p-4">
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
  )
}

export default async function Home() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from('posts')
    .select('*, profiles(full_name, avatar)')
    .order('created_at', { ascending: false })
    .limit(30)

  const { located, unlocated } = groupByLocation((posts ?? []) as Post[])

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

      {/* Latest News — shown first */}
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

      {/* Community Feed — grouped by location */}
      {posts && posts.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Community Feed</h2>
            <Link href="/new" className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
              + Post
            </Link>
          </div>

          {located.map(({ country, regions }) => (
            <div key={country} className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
                <span className="text-xs font-bold uppercase tracking-widest px-2"
                  style={{ color: 'var(--primary)' }}>🌍 {country}</span>
                <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
              </div>
              {regions.map(({ region, cities }) => (
                <div key={region} className="mb-4 ml-2">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: '#6b7280' }}>📍 {region}</p>
                  {cities.map(({ city, posts: cityPosts }) => (
                    <div key={city} className="mb-3 ml-3">
                      <p className="text-xs font-medium mb-2 flex items-center gap-1"
                        style={{ color: '#9ca3af' }}>
                        🏙 {city}
                        <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs"
                          style={{ background: 'var(--muted)', color: '#6b7280' }}>
                          {cityPosts.length}
                        </span>
                      </p>
                      <div className="flex flex-col gap-3">
                        {cityPosts.map(post => <PostCard key={post.id} post={post} />)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}

          {unlocated.length > 0 && (
            <div className="mb-4">
              {located.length > 0 && (
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
                  <span className="text-xs font-bold uppercase tracking-widest px-2"
                    style={{ color: '#9ca3af' }}>🌐 Worldwide</span>
                  <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
                </div>
              )}
              <div className="flex flex-col gap-3">
                {unlocated.map(post => <PostCard key={post.id} post={post} />)}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Contact */}
      <div className="card p-6 text-center text-sm" style={{ color: '#6b7280' }}>
        <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Contact the Webmaster</p>
        <a href="mailto:etom@buddiespace.app" className="hover:underline" style={{ color: 'var(--primary)' }}>
          etom@buddiespace.app
        </a>
      </div>
    </div>
  )
}
