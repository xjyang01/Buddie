"use client";
import { useState } from "react";
import { use } from "react";
import { Heart, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import TagPill from "@/components/TagPill";
import { POSTS } from "@/lib/data";

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const post = POSTS.find((p) => p.id === id);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post?.likes ?? 0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post?.comments ?? []);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <p className="text-4xl mb-4">🤔</p>
        <p className="text-lg font-medium mb-4">Post not found</p>
        <Link href="/" className="text-sm" style={{ color: "var(--primary)" }}>← Back to feed</Link>
      </div>
    );
  }

  const submitComment = () => {
    if (!comment.trim()) return;
    setComments([
      ...comments,
      { id: `new-${Date.now()}`, author: "You", avatar: "😊", text: comment.trim(), time: "just now" },
    ]);
    setComment("");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/" className="flex items-center gap-2 text-sm mb-5 hover:opacity-70 transition" style={{ color: "#9ca3af" }}>
        <ArrowLeft size={16} /> Back to feed
      </Link>

      {/* Post */}
      <div className="card p-6 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "var(--muted)" }}>
            {post.avatar}
          </div>
          <div>
            <Link href={`/user/${post.authorId}`} className="font-semibold hover:underline">{post.author}</Link>
            <p className="text-xs" style={{ color: "#9ca3af" }}>{post.time}</p>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-4">{post.content}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
        </div>

        <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
          <button
            onClick={() => { setLiked(!liked); setLikes(liked ? likes - 1 : likes + 1); }}
            className="flex items-center gap-1.5 text-sm transition-colors"
            style={{ color: liked ? "var(--primary)" : "#9ca3af" }}
          >
            <Heart size={16} fill={liked ? "var(--primary)" : "none"} />
            {likes} likes
          </button>
          <span className="text-sm" style={{ color: "#9ca3af" }}>{comments.length} comments</span>
        </div>
      </div>

      {/* Comments */}
      <div className="card p-5 mb-4">
        <h2 className="font-semibold mb-4">Comments</h2>
        {comments.length === 0 && (
          <p className="text-sm text-center py-4" style={{ color: "#9ca3af" }}>No comments yet. Be the first!</p>
        )}
        <div className="flex flex-col gap-4">
          {comments.map((c) => (
            <div key={c.id} className="flex gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0" style={{ background: "var(--muted)" }}>
                {c.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm font-semibold">{c.author}</span>
                  <span className="text-xs" style={{ color: "#9ca3af" }}>{c.time}</span>
                </div>
                <p className="text-sm leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add comment */}
      <div className="card p-4 flex gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0" style={{ background: "var(--muted)" }}>
          😊
        </div>
        <div className="flex-1 flex gap-2">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitComment()}
            placeholder="Add a comment..."
            className="flex-1 rounded-xl px-3 py-2 text-sm outline-none"
            style={{ border: "1px solid var(--border)", background: "var(--background)" }}
          />
          <button
            onClick={submitComment}
            disabled={!comment.trim()}
            className="px-3 py-2 rounded-xl transition disabled:opacity-40"
            style={{ background: "var(--primary)", color: "white" }}
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
