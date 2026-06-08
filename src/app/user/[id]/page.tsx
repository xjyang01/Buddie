import { PEOPLE, POSTS } from "@/lib/data";
import PostCard from "@/components/PostCard";
import TagPill from "@/components/TagPill";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const person = PEOPLE.find((p) => p.id === id);
  const userPosts = POSTS.filter((p) => p.authorId === id);

  if (!person) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <p className="text-4xl mb-4">👤</p>
        <p className="font-medium mb-4">User not found</p>
        <Link href="/discover" style={{ color: "var(--primary)" }}>← Discover people</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Profile card */}
      <div className="card p-6 mb-6">
        <div className="flex items-start gap-5">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0" style={{ background: "var(--muted)" }}>
            {person.avatar}
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-1">{person.name}</h1>
            <p className="text-sm mb-3" style={{ color: "#6b7280" }}>{person.bio}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {person.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
            </div>
            <div className="flex gap-6 text-sm mb-4">
              <div><span className="font-bold">{person.following}</span> <span style={{ color: "#9ca3af" }}>following</span></div>
              <div><span className="font-bold">{person.followers}</span> <span style={{ color: "#9ca3af" }}>followers</span></div>
              {person.mutual > 0 && (
                <div style={{ color: "var(--primary)" }}>{person.mutual} mutual friend{person.mutual > 1 ? "s" : ""}</div>
              )}
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: "var(--primary)" }}
              >
                Follow
              </button>
              <Link
                href="/messages/1"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border transition hover:opacity-80"
                style={{ borderColor: "var(--border)" }}
              >
                <MessageCircle size={15} /> Message
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      <h2 className="font-semibold mb-3">Posts by {person.name}</h2>
      {userPosts.length === 0 ? (
        <div className="card p-10 text-center" style={{ color: "#9ca3af" }}>
          <p className="text-4xl mb-3">🌱</p>
          <p>No posts yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {userPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      )}
    </div>
  );
}
