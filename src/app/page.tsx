import Link from "next/link";

const MONEY_NEWS = [
  {
    id: "1",
    emoji: "🤖",
    title: "Anthropic Eyes IPO as AI Valuations Soar",
    summary: "Anthropic, the AI safety company behind Claude, is exploring a public offering as its valuation surpasses $60 billion.",
    date: "June 9, 2026",
  },
  {
    id: "2",
    emoji: "💡",
    title: "OpenAI IPO: What Investors Need to Know",
    summary: "OpenAI is weighing a path to going public with revenue exceeding $3 billion annually and a valuation north of $80 billion.",
    date: "June 9, 2026",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Welcome */}
      <div
        className="rounded-2xl p-8 text-center"
        style={{ background: "linear-gradient(135deg, #fed7aa, #fef3c7)" }}
      >
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          Find Buddie, Find Life! 🌻
        </h1>
        <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#92400e" }}>
          Hopefully, Buddie will make you smart, successful and happy.
        </p>
      </div>

      {/* Money News */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            💰 Money
          </h2>
          <Link href="/money" className="text-sm font-medium" style={{ color: "var(--primary)" }}>
            See all →
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {MONEY_NEWS.map((item) => (
            <Link key={item.id} href="/money">
              <div className="card p-4 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: "var(--muted)" }}
                >
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-0.5">{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.summary}</p>
                  <p className="text-xs mt-1" style={{ color: "#9ca3af" }}>{item.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="card p-6 text-center text-sm" style={{ color: "#6b7280" }}>
        <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>Contact the Webmaster</p>
        <p>
          Xiang-Jiao Yang —{" "}
          <a
            href="mailto:xiang-jiao.yang@mcgill.ca"
            className="hover:underline"
            style={{ color: "var(--primary)" }}
          >
            xiang-jiao.yang@mcgill.ca
          </a>
        </p>
      </div>
    </div>
  );
}
