"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import PostCard from "@/components/PostCard";
import TagPill from "@/components/TagPill";
import Link from "next/link";
import { POSTS, PEOPLE } from "@/lib/data";

function SearchResults() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [tab, setTab] = useState<"posts" | "people">("posts");

  const q = query.toLowerCase().trim();

  const matchedPosts = useMemo(() =>
    q ? POSTS.filter(p =>
      p.content.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q)) ||
      p.author.toLowerCase().includes(q)
    ) : POSTS,
    [q]
  );

  const matchedPeople = useMemo(() =>
    q ? PEOPLE.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.bio.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q))
    ) : PEOPLE,
    [q]
  );

  return (
    <div className="max-w-2xl mx-auto">
      {/* Search bar */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#9ca3af" }} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts, people, or tags..."
          className="w-full pl-11 pr-4 py-3 rounded-2xl text-sm outline-none"
          style={{ border: "1px solid var(--border)", background: "var(--card)" }}
          autoFocus
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 p-1 rounded-xl" style={{ background: "var(--muted)" }}>
        {(["posts", "people"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 py-2 rounded-lg text-sm font-medium capitalize transition"
            style={tab === t
              ? { background: "white", color: "var(--primary)", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }
              : { color: "#9ca3af" }
            }
          >
            {t} ({t === "posts" ? matchedPosts.length : matchedPeople.length})
          </button>
        ))}
      </div>

      {/* Results */}
      {tab === "posts" && (
        <div className="flex flex-col gap-4">
          {matchedPosts.length === 0 ? (
            <div className="text-center py-16" style={{ color: "#9ca3af" }}>
              <p className="text-4xl mb-3">🔍</p>
              <p>No posts found for "{query}"</p>
            </div>
          ) : (
            matchedPosts.map((post) => <PostCard key={post.id} post={post} />)
          )}
        </div>
      )}

      {tab === "people" && (
        <div className="flex flex-col gap-3">
          {matchedPeople.length === 0 ? (
            <div className="text-center py-16" style={{ color: "#9ca3af" }}>
              <p className="text-4xl mb-3">👀</p>
              <p>No people found for "{query}"</p>
            </div>
          ) : (
            matchedPeople.map((person) => (
              <div key={person.id} className="card p-4 flex items-center gap-4">
                <Link href={`/user/${person.id}`}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "var(--muted)" }}>
                    {person.avatar}
                  </div>
                </Link>
                <div className="flex-1">
                  <Link href={`/user/${person.id}`} className="font-semibold hover:underline">{person.name}</Link>
                  <p className="text-sm" style={{ color: "#6b7280" }}>{person.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {person.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
                  </div>
                </div>
                <button
                  className="px-4 py-2 rounded-xl text-sm font-medium shrink-0"
                  style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                >
                  Follow
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchResults />
    </Suspense>
  );
}
