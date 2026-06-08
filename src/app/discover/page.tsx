import TagPill from "@/components/TagPill";
import Link from "next/link";
import { PEOPLE } from "@/lib/data";

const CATEGORIES = ["All", "Outdoors", "Music", "Food", "Art", "Gaming", "Books", "Travel", "Fitness"];

export default function DiscoverPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Discover People</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>Find friends who share your vibe</p>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap mb-6">
        {CATEGORIES.map((cat, i) => (
          <Link
            key={cat}
            href={i === 0 ? "/discover" : `/search?q=${cat.toLowerCase()}&tab=people`}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition"
            style={
              i === 0
                ? { background: "var(--primary)", color: "white" }
                : { background: "var(--muted)", color: "var(--foreground)" }
            }
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* People grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PEOPLE.map((person) => (
          <div key={person.id} className="card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <Link href={`/user/${person.id}`}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "var(--muted)" }}
                >
                  {person.avatar}
                </div>
              </Link>
              <div>
                <Link href={`/user/${person.id}`} className="font-semibold hover:underline">{person.name}</Link>
                {person.mutual > 0 && (
                  <p className="text-xs" style={{ color: "var(--primary)" }}>
                    {person.mutual} mutual friend{person.mutual > 1 ? "s" : ""}
                  </p>
                )}
              </div>
            </div>
            <p className="text-sm" style={{ color: "#6b7280" }}>{person.bio}</p>
            <div className="flex flex-wrap gap-1.5">
              {person.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 py-2 rounded-xl text-sm font-semibold transition hover:opacity-90"
                style={{ background: "var(--primary-light)", color: "var(--primary)" }}
              >
                Follow
              </button>
              <Link
                href="/messages"
                className="px-4 py-2 rounded-xl text-sm font-medium border transition hover:opacity-80 flex items-center"
                style={{ borderColor: "var(--border)" }}
              >
                Say Hi 👋
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
