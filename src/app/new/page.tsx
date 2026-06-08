"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SUGGESTED_TAGS = ["hiking", "music", "food", "art", "books", "gaming", "travel", "fitness", "coffee", "events"];

export default function NewPostPage() {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState("");
  const router = useRouter();

  const toggleTag = (tag: string) => {
    setTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  };

  const addCustomTag = () => {
    const t = customTag.trim().toLowerCase().replace(/\s+/g, "-");
    if (t && !tags.includes(t)) setTags([...tags, t]);
    setCustomTag("");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Share something 🌻</h1>

      <div className="card p-6 flex flex-col gap-5">
        {/* Content */}
        <div>
          <label className="block text-sm font-medium mb-2">What's on your mind?</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Looking for hiking buddies, starting a book club, hosting a dinner... anything goes!"
            rows={5}
            className="w-full rounded-xl p-3 text-sm resize-none outline-none focus:ring-2"
            style={{
              border: "1px solid var(--border)",
              background: "var(--background)",
            }}
          />
          <p className="text-xs mt-1 text-right" style={{ color: "#9ca3af" }}>{content.length}/280</p>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium mb-2">Add tags</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {SUGGESTED_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className="text-xs px-3 py-1.5 rounded-full font-medium transition"
                style={
                  tags.includes(tag)
                    ? { background: "var(--primary)", color: "white" }
                    : { background: "var(--muted)", color: "var(--foreground)" }
                }
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addCustomTag()}
              placeholder="Add custom tag..."
              className="flex-1 rounded-xl px-3 py-2 text-sm outline-none"
              style={{ border: "1px solid var(--border)", background: "var(--background)" }}
            />
            <button
              onClick={addCustomTag}
              className="px-4 py-2 rounded-xl text-sm font-medium"
              style={{ background: "var(--primary-light)", color: "var(--primary)" }}
            >
              Add
            </button>
          </div>
          {tags.length > 0 && (
            <p className="text-xs mt-2" style={{ color: "var(--primary)" }}>
              Selected: {tags.map((t) => `#${t}`).join(" ")}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => router.push("/")}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium border"
            style={{ borderColor: "var(--border)" }}
          >
            Cancel
          </button>
          <button
            onClick={() => router.push("/")}
            disabled={content.trim().length === 0}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition disabled:opacity-40"
            style={{ background: "var(--primary)" }}
          >
            Post to Buddie 🌻
          </button>
        </div>
      </div>
    </div>
  );
}
