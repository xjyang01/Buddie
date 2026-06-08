"use client";
import { useState, use, useRef, useEffect } from "react";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { CONVERSATIONS } from "@/lib/data";

export default function ConversationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const conv = CONVERSATIONS.find((c) => c.id === id);

  const [messages, setMessages] = useState(conv?.messages ?? []);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!conv) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <p className="text-4xl mb-4">💬</p>
        <p className="font-medium mb-4">Conversation not found</p>
        <Link href="/messages" style={{ color: "var(--primary)" }}>← Back to messages</Link>
      </div>
    );
  }

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: `m${Date.now()}`, fromMe: true, text: input.trim(), time: "just now" }]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col" style={{ height: "calc(100vh - 100px)" }}>
      {/* Header */}
      <div className="card flex items-center gap-3 px-4 py-3 mb-4">
        <Link href="/messages" className="hover:opacity-70 transition" style={{ color: "#9ca3af" }}>
          <ArrowLeft size={18} />
        </Link>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: "var(--muted)" }}>
          {conv.person.avatar}
        </div>
        <div>
          <p className="font-semibold text-sm">{conv.person.name}</p>
          <p className="text-xs" style={{ color: "var(--primary)" }}>Active now</p>
        </div>
        <Link href={`/user/${conv.person.id}`} className="ml-auto text-xs font-medium" style={{ color: "var(--primary)" }}>
          View profile →
        </Link>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-3 px-1 pb-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}>
            {!msg.fromMe && (
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm mr-2 shrink-0 self-end" style={{ background: "var(--muted)" }}>
                {conv.person.avatar}
              </div>
            )}
            <div className="max-w-[70%]">
              <div
                className="px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                style={msg.fromMe
                  ? { background: "var(--primary)", color: "white", borderBottomRightRadius: "4px" }
                  : { background: "var(--card)", border: "1px solid var(--border)", borderBottomLeftRadius: "4px" }
                }
              >
                {msg.text}
              </div>
              <p className={`text-xs mt-1 ${msg.fromMe ? "text-right" : ""}`} style={{ color: "#9ca3af" }}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="card flex gap-3 p-3 mt-auto">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder={`Message ${conv.person.name}...`}
          className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none"
          style={{ border: "1px solid var(--border)", background: "var(--background)" }}
          autoFocus
        />
        <button
          onClick={send}
          disabled={!input.trim()}
          className="w-10 h-10 rounded-xl flex items-center justify-center transition disabled:opacity-40"
          style={{ background: "var(--primary)", color: "white" }}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
