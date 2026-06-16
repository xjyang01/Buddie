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

const REPORTS: NewsReport[] = [
  {
    id: "ai1",
    headline: "OpenAI's o3 Scores 87.5% on ARC-AGI, Approaching Human-Level Abstract Reasoning",
    source: "ARC Prize Foundation", date: "Dec 2024",
    tags: ["reasoning", "AGI", "benchmark", "OpenAI"],
    report: `The ARC-AGI benchmark — designed to test fluid intelligence rather than memorized knowledge — has long resisted AI systems. Where GPT-4 scored below 5%, OpenAI's o3 model achieved 87.5% under high-compute conditions, a score that rivals average human performance of around 85%.

The result is significant because ARC-AGI tasks require genuine novel reasoning: given a small set of input-output grid examples, models must infer the underlying rule and apply it to a new case. The benchmark was explicitly designed to be unsolvable by pattern-matching alone, making o3's performance a landmark in AI capability research.

Critics note that o3's compute cost per task remains very high, raising questions about practical scalability. Nonetheless, the result has reignited debate about how close current systems are to general-purpose reasoning — and what "AGI" would even mean to measure.`,
  },
  {
    id: "ai2",
    headline: "Google DeepMind's AlphaFold 3 Extends Protein Prediction to DNA, RNA, and Small Molecules",
    source: "Nature", date: "May 2024",
    tags: ["AlphaFold", "drug discovery", "structural biology", "DeepMind"],
    report: `When AlphaFold 2 solved the protein structure prediction problem in 2020, it transformed structural biology. AlphaFold 3, published in Nature, goes further: it predicts the joint structure of proteins interacting with DNA, RNA, ligands, and small molecules — precisely the interactions that matter most for drug design.

The model uses a diffusion-based architecture, departing from AlphaFold 2's evolutionary sequence approach. In head-to-head comparisons, it outperforms specialized tools across nearly every molecular interaction category. For pharmaceutical researchers, this means in silico screening of drug candidates at a scale and accuracy previously impossible.

DeepMind has made predictions available via the AlphaFold Server, though the full model weights are restricted for commercial use — a decision that has sparked debate about open science norms in an era of highly capable AI research tools.`,
  },
  {
    id: "ai3",
    headline: "Mixture-of-Experts Architecture Powers New Generation of Efficient LLMs",
    source: "Mistral AI / Google", date: "2024–2025",
    tags: ["LLM", "MoE", "efficiency", "architecture"],
    report: `The dominant trend in large language model architecture has shifted from scaling dense transformers to Mixture-of-Experts (MoE) designs, in which only a fraction of model parameters are activated per token. Models like Mixtral 8x7B and Google's Gemini 1.5 demonstrate that MoE can match or exceed dense model performance at a fraction of the inference cost.

The practical implications are substantial. A 56-billion-parameter MoE model that activates 12 billion parameters per forward pass can run on hardware that would be insufficient for a comparably capable dense model. This has accelerated deployment of capable models on consumer hardware and in cost-sensitive production environments.

Researchers are now investigating how to train MoE models more stably, route tokens more intelligently, and avoid load-imbalance problems where certain experts are overloaded. The architecture is expected to dominate frontier model design through the remainder of the decade.`,
  },
];

// Pull Anthropic + OpenAI IPO articles from the shared Money data
const AI_INDUSTRY_NEWS = MONEY_NEWS.filter((n) =>
  ["spacex-cursor", "abridge-nvidia", "deepseek-funding", "anthropic-ipo", "openai-ipo"].includes(n.id)
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
