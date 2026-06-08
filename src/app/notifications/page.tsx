const NOTIFICATIONS = [
  { id: 1, avatar: "🌸", text: "Maya Lin liked your post", time: "5m ago", unread: true },
  { id: 2, avatar: "🍜", text: "Leo Chen started following you", time: "1h ago", unread: true },
  { id: 3, avatar: "📚", text: "Priya Sharma commented: \"This sounds amazing, count me in!\"", time: "3h ago", unread: false },
  { id: 4, avatar: "🎸", text: "James Okafor said hi to you", time: "1d ago", unread: false },
  { id: 5, avatar: "🎨", text: "Sara Kim liked your post", time: "2d ago", unread: false },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="card overflow-hidden">
        {NOTIFICATIONS.map((n, i) => (
          <div
            key={n.id}
            className="flex items-center gap-4 px-5 py-4 transition-colors hover:opacity-80"
            style={{
              background: n.unread ? "var(--muted)" : "var(--card)",
              borderBottom: i < NOTIFICATIONS.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0"
              style={{ background: "var(--primary-light)" }}
            >
              {n.avatar}
            </div>
            <div className="flex-1">
              <p className="text-sm">{n.text}</p>
              <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>{n.time}</p>
            </div>
            {n.unread && (
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--primary)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
