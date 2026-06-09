import Link from "next/link";
import { MONEY_NEWS } from "@/lib/money";

export default function MoneyPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Money 💰</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Personal finance, investing, and economic news
      </p>

      <div className="flex flex-col gap-4">
        {MONEY_NEWS.map((item) => (
          <Link key={item.id} href={`/money/${item.id}`}>
            <div className="card p-5 hover:shadow-md transition-shadow cursor-pointer">
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
                  <p className="text-xs mt-2 font-medium" style={{ color: "var(--primary)" }}>
                    Read full article →
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
