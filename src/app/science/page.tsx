import Link from "next/link";

export default function SciencePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Science & Technology 🔬</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Explore research, discoveries, and technology news
      </p>

      <div className="flex flex-col gap-3">
        <Link href="/science/biomedical" className="card p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: "var(--muted)" }}>🧬</div>
          <div>
            <p className="font-semibold">Biomedical Science</p>
            <p className="text-sm" style={{ color: "#6b7280" }}>Research news in medicine, genetics, and molecular biology</p>
          </div>
        </Link>
        <Link href="/science/ai" className="card p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: "var(--muted)" }}>🤖</div>
          <div>
            <p className="font-semibold">Artificial Intelligence</p>
            <p className="text-sm" style={{ color: "#6b7280" }}>Research news in machine learning, AI systems, and intelligent computing</p>
          </div>
        </Link>
        <Link href="/science/physics" className="card p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: "var(--muted)" }}>⚛️</div>
          <div>
            <p className="font-semibold">Physics</p>
            <p className="text-sm" style={{ color: "#6b7280" }}>Research news in particle physics, quantum mechanics, and beyond</p>
          </div>
        </Link>

        {/* SpaceX IPO highlight */}
        <div className="mt-4">
          <h2 className="text-base font-bold mb-3">Featured: Space Technology</h2>
          <Link href="/money/spacex-ipo" className="card p-4 flex items-start gap-4 hover:shadow-md transition-shadow block">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: "var(--muted)" }}>🚀</div>
            <div className="flex-1">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-1 inline-block" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>IPO</span>
              <p className="font-semibold text-sm mt-1">SpaceX IPO: The Most Anticipated Listing in a Generation</p>
              <p className="text-xs leading-relaxed mt-0.5" style={{ color: "#6b7280" }}>
                SpaceX could value at over $350 billion — the largest tech IPO in history. Starlink's growth and Mars ambitions are reshaping what a public company can be.
              </p>
              <p className="text-xs mt-1.5 font-medium" style={{ color: "var(--primary)" }}>Read full article →</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
