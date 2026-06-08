"use client";
import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";
import TagPill from "./TagPill";
import type { Post } from "@/lib/data";

export default function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="card p-5 hover:shadow-md transition-shadow">
      {/* Author */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0"
          style={{ background: "var(--muted)" }}
        >
          {post.avatar}
        </div>
        <div>
          <Link href={`/user/${post.authorId}`} className="font-semibold text-sm hover:underline">
            {post.author}
          </Link>
          <p className="text-xs" style={{ color: "#9ca3af" }}>{post.time}</p>
        </div>
      </div>

      {/* Content — click to open post */}
      <Link href={`/post/${post.id}`}>
        <p className="text-sm leading-relaxed mb-3 hover:opacity-80 transition-opacity">{post.content}</p>
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
        <button
          onClick={toggleLike}
          className="flex items-center gap-1.5 text-sm transition-colors"
          style={{ color: liked ? "var(--primary)" : "#9ca3af" }}
        >
          <Heart size={16} fill={liked ? "var(--primary)" : "none"} />
          {likes}
        </button>
        <Link
          href={`/post/${post.id}`}
          className="flex items-center gap-1.5 text-sm"
          style={{ color: "#9ca3af" }}
        >
          <MessageCircle size={16} />
          {post.comments.length}
        </Link>
        <button className="flex items-center gap-1.5 text-sm ml-auto" style={{ color: "#9ca3af" }}>
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
}
