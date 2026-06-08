import Link from "next/link";
import { CONVERSATIONS } from "@/lib/data";

export default function MessagesPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      <div className="card overflow-hidden">
        {CONVERSATIONS.map((conv, i) => (
          <Link
            key={conv.id}
            href={`/messages/${conv.id}`}
            className="flex items-center gap-4 px-5 py-4 hover:opacity-80 transition"
            style={{
              background: conv.unread > 0 ? "var(--muted)" : "var(--card)",
              borderBottom: i < CONVERSATIONS.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "var(--primary-light)" }}>
                {conv.person.avatar}
              </div>
              {conv.unread > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center font-bold"
                  style={{ background: "var(--primary)" }}
                >
                  {conv.unread}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className={`text-sm ${conv.unread > 0 ? "font-bold" : "font-medium"}`}>{conv.person.name}</p>
                <p className="text-xs shrink-0 ml-2" style={{ color: "#9ca3af" }}>
                  {conv.messages[conv.messages.length - 1]?.time}
                </p>
              </div>
              <p className="text-sm truncate mt-0.5" style={{ color: "#9ca3af" }}>
                {conv.messages[conv.messages.length - 1]?.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
