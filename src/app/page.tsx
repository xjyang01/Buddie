import Link from "next/link";
import { MONEY_NEWS } from "@/lib/money";

// Ka-Shing Li first, then DeepSeek, then Anthropic, then OpenAI
const HOME_NEWS = [
  MONEY_NEWS.find((n) => n.id === "li-ka-shing-autobiography")!,
  MONEY_NEWS.find((n) => n.id === "deepseek-funding")!,
  MONEY_NEWS.find((n) => n.id === "anthropic-ipo")!,
  MONEY_NEWS.find((n) => n.id === "openai-ipo")!,
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

      {/* News */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Latest News</h2>
          <Link href="/money" className="text-sm font-medium" style={{ color: "var(--primary)" }}>
            See all →
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {HOME_NEWS.map((item) => (
            <Link key={item.id} href={`/money/${item.id}`}>
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
                  <p className="text-xs mt-1.5 font-medium" style={{ color: "var(--primary)" }}>
                    Read full article →
                  </p>
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
