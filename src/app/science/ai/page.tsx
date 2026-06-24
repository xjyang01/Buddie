import TagPill from "@/components/TagPill";
import Link from "next/link";
import { MONEY_NEWS } from "@/lib/money";

type NewsReport = {
  id: string;
  headline: string;
  source: string;
  date: string;
  tags: string[];
  report: string;
};

const REPORTS: NewsReport[] = [];

// Pull Anthropic + OpenAI IPO articles from the shared Money data
const AI_INDUSTRY_NEWS = MONEY_NEWS.filter((n) =>
  ["fugu-user-reactions", "fugu-launch", "spacex-cursor", "abridge-nvidia", "deepseek-funding", "anthropic-ipo", "openai-ipo"].includes(n.id)
);

export default function AIPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Link href="/science" className="text-sm hover:underline" style={{ color: "var(--primary)" }}>
          ← Science & Technology
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-1">Artificial Intelligence 🤖</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Research news in machine learning, AI systems, and intelligent computing
      </p>

      {/* Research articles */}
      <div className="flex flex-col gap-6 mb-10">
        {REPORTS.map((report) => (
          <div key={report.id} className="card p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div>
              <p className="font-bold text-lg leading-snug">{report.headline}</p>
              <p className="text-xs mt-1 italic" style={{ color: "#9ca3af" }}>{report.source} · {report.date}</p>
            </div>
            <div className="flex flex-col gap-3">
              {report.report.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {report.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AI Industry & Business */}
      <h2 className="text-lg font-bold mb-3">💼 AI Industry & Business</h2>
      <div className="flex flex-col gap-4">
        {AI_INDUSTRY_NEWS.map((item) => (
          <Link key={item.id} href={`/money/${item.id}`}>
            <div className="card p-5 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
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
                <h3 className="font-bold text-base mb-1">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.summary}</p>
                <p className="text-xs mt-2 font-medium" style={{ color: "var(--primary)" }}>
                  Read full article →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
