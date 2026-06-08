import TagPill from "@/components/TagPill";
import PostCard from "@/components/PostCard";

const MY_POSTS = [
  {
    id: "p1",
    author: "You",
    avatar: "😊",
    time: "just now",
    authorId: "me",
    content: "Looking for someone to explore weekend farmers markets with. I bring the tote bag, you bring the appetite.",
    tags: ["food", "weekends", "markets"],
    likes: 4,
    comments: [],
  },
];

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Profile header */}
      <div className="card p-6 mb-6">
        <div className="flex items-start gap-4">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0"
            style={{ background: "var(--muted)" }}
          >
            😊
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Your Name</h1>
            <p className="text-sm mb-3" style={{ color: "#6b7280" }}>
              New to Buddie! Edit your profile to introduce yourself.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["coffee", "travel", "books"].map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
            <div className="flex gap-6 text-sm">
              <div><span className="font-bold">12</span> <span style={{ color: "#9ca3af" }}>following</span></div>
              <div><span className="font-bold">8</span> <span style={{ color: "#9ca3af" }}>followers</span></div>
            </div>
          </div>
          <button
            className="px-4 py-2 rounded-xl text-sm font-medium border"
            style={{ borderColor: "var(--border)" }}
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Posts */}
      <h2 className="font-semibold mb-3">Your Posts</h2>
      <div className="flex flex-col gap-4">
        {MY_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {MY_POSTS.length === 0 && (
        <div
          className="card p-10 text-center"
          style={{ color: "#9ca3af" }}
        >
          <p className="text-4xl mb-3">🌱</p>
          <p>No posts yet. Share something to get started!</p>
        </div>
      )}
    </div>
  );
}
