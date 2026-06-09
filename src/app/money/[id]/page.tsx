import { MONEY_NEWS } from "@/lib/money";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default async function MoneyArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = MONEY_NEWS.find((n) => n.id === id);

  if (!article) notFound();

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back link */}
      <Link
        href="/money"
        className="flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition"
        style={{ color: "#9ca3af" }}
      >
        <ArrowLeft size={15} /> Back to Money
      </Link>

      {/* Article header */}
      <div className="card p-6 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: "var(--primary-light)", color: "var(--primary)" }}
          >
            {article.category}
          </span>
          <span className="text-xs" style={{ color: "#9ca3af" }}>
            {article.date} · {article.readTime}
          </span>
        </div>

        <h1 className="text-2xl font-bold mb-3 leading-snug">
          {article.emoji} {article.title}
        </h1>

        <p
          className="text-base leading-relaxed font-medium"
          style={{ color: "#6b7280", borderLeft: "3px solid var(--primary)", paddingLeft: "1rem" }}
        >
          {article.summary}
        </p>
      </div>

      {/* Article body */}
      <div className="card p-6 flex flex-col gap-5">
        {article.body.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Footer */}
      <div className="card p-4 mt-4 text-center text-xs" style={{ color: "#9ca3af" }}>
        Published on Buddiespace · {article.date}
      </div>

      {/* More articles */}
      <div className="mt-8">
        <h2 className="font-bold mb-3">More from Money 💰</h2>
        <div className="flex flex-col gap-3">
          {MONEY_NEWS.filter((n) => n.id !== id).map((item) => (
            <Link key={item.id} href={`/money/${item.id}`}>
              <div className="card p-4 flex items-start gap-3 hover:shadow-md transition-shadow">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: "var(--muted)" }}
                >
                  {item.emoji}
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>{item.date} · {item.readTime}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
