import PostCard from "@/components/PostCard";
import TagPill from "@/components/TagPill";
import { POSTS, PEOPLE } from "@/lib/data";
import Link from "next/link";

const TRENDING_TAGS = ["hiking", "NYC", "books", "music", "food", "art", "gaming", "travel", "fitness", "coffee"];

export default function Home() {
  return (
    <div className="flex gap-8">
      {/* Feed */}
      <div className="flex-1">
        {/* Hero */}
        <div
          className="rounded-2xl p-6 mb-6 text-center"
          style={{ background: "linear-gradient(135deg, #fed7aa, #fef3c7)" }}
        >
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
            Find your people 🌻
          </h1>
          <p className="text-base mb-4" style={{ color: "#92400e" }}>
            Share what you love. Connect with people who get it.
          </p>
          <Link
            href="/new"
            className="inline-block px-6 py-2.5 rounded-xl font-semibold text-white text-sm transition hover:opacity-90"
            style={{ background: "var(--primary)" }}
          >
            + Share something
          </Link>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-4">
          {POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col gap-4 w-64 shrink-0">
        <div className="card p-4">
          <h2 className="font-semibold text-sm mb-3">Trending Tags</h2>
          <div className="flex flex-wrap gap-2">
            {TRENDING_TAGS.map((tag) => (
              <TagPill key={tag} tag={tag} href={`/search?q=${tag}`} />
            ))}
          </div>
        </div>

        <div className="card p-4">
          <h2 className="font-semibold text-sm mb-3">New on Buddie</h2>
          {PEOPLE.slice(0, 4).map((person) => (
            <div key={person.id} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{person.avatar}</span>
                <span className="text-sm font-medium">{person.name}</span>
              </div>
              <button
                className="text-xs px-3 py-1 rounded-lg font-medium"
                style={{ background: "var(--primary-light)", color: "var(--primary)" }}
              >
                Follow
              </button>
            </div>
          ))}
          <Link href="/discover" className="block text-center text-xs mt-2 font-medium" style={{ color: "var(--primary)" }}>
            See all →
          </Link>
        </div>
      </aside>
    </div>
  );
}
