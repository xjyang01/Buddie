import Link from "next/link";

const NEWS = [
  {
    id: "1",
    category: "IPO",
    title: "Anthropic Eyes IPO as AI Valuations Soar",
    summary:
      "Anthropic, the AI safety company behind Claude, is reportedly exploring a public offering as its valuation surpasses $60 billion. Backed by Google and Amazon, an IPO would mark one of the largest tech listings in recent years.",
    date: "June 9, 2026",
    readTime: "3 min read",
    emoji: "🤖",
  },
  {
    id: "2",
    category: "IPO",
    title: "OpenAI IPO: What Investors Need to Know",
    summary:
      "OpenAI, maker of ChatGPT and GPT-4, is weighing a path to going public. With revenue exceeding $3 billion annually and a valuation north of $80 billion, the offering could reshape the AI investment landscape — but questions around governance and non-profit structure remain.",
    date: "June 9, 2026",
    readTime: "4 min read",
    emoji: "💡",
  },
];

export default function MoneyPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Money 💰</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Personal finance, investing, and economic news
      </p>

      {/* Featured news */}
      <div className="flex flex-col gap-4">
        {NEWS.map((item) => (
          <div key={item.id} className="card p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: "var(--muted)" }}
              >
                {item.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs" style={{ color: "#9ca3af" }}>
                    {item.date} · {item.readTime}
                  </span>
                </div>
                <h2 className="font-bold text-base mb-1">{item.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
