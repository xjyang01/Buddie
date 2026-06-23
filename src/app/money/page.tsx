export const revalidate = 300

import Link from "next/link";
import { MONEY_NEWS } from "@/lib/money";
import { createClient } from "@/lib/supabase/server";
import { formatDistanceToNow } from "date-fns";

export default async function MoneyPage() {
  const supabase = await createClient()

  const { data: bizPosts } = await supabase
    .from('posts')
    .select('*, profiles(full_name, avatar)')
    .contains('tags', ['business'])
    .order('created_at', { ascending: false })
    .limit(20)

  return (
    <div className="flex flex-col gap-10">

      {/* News */}
      <div>
        <h1 className="text-2xl font-bold mb-1">Money 💰</h1>
        <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
          Personal finance, investing, and economic news
        </p>
        <div className="flex flex-col gap-4">
          {MONEY_NEWS.map((item) => (
            <Link key={item.id} href={`/money/${item.id}`}>
              <div className="card p-5 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: "var(--muted)" }}>
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                        {item.category}
                      </span>
                      <span className="text-xs" style={{ color: "#9ca3af" }}>
                        {item.date} · {item.readTime}
                      </span>
                    </div>
                    <h2 className="font-bold text-base mb-1">{item.title}</h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {item.summary}
                    </p>
                    <p className="text-xs mt-2 font-medium" style={{ color: "var(--primary)" }}>
                      Read full article →
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Business Partners & Joint Ventures Board */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-bold">🤝 Business Partners & Joint Ventures</h2>
          <Link href="/new?tag=business"
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition"
            style={{ background: 'var(--primary)' }}>
            + Post Inquiry
          </Link>
        </div>
        <p className="text-sm mb-5" style={{ color: '#9ca3af' }}>
          Looking for a co-founder, investor, or joint venture partner? Post here.
        </p>

        {bizPosts && bizPosts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {bizPosts.map((post: any) => (
              <div key={post.id} className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0"
                    style={{ background: 'var(--muted)' }}>
                    {post.profiles?.avatar || '🌻'}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{post.profiles?.full_name}</p>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>
                      {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                      {post.post_city && ` · ${post.post_city}`}
                      {post.post_country && !post.post_city && ` · ${post.post_country}`}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">{post.content}</p>
                {post.tags?.filter((t: string) => t !== 'business').length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.filter((t: string) => t !== 'business').map((tag: string) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="card p-10 text-center">
            <p className="text-3xl mb-3">🤝</p>
            <p className="font-semibold mb-1">No posts yet</p>
            <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>
              Be the first to post a business inquiry or joint venture opportunity
            </p>
            <Link href="/new?tag=business"
              className="inline-block px-6 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition"
              style={{ background: 'var(--primary)' }}>
              Post an Inquiry →
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}
