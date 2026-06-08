import TagPill from "@/components/TagPill";

type Article = {
  id: string;
  title: string;
  source: string;
  field: string;
  tags: string[];
  posted: string;
  summary: string;
};

const ARTICLES: Article[] = [
  {
    id: "s1", title: "CRISPR Gene Editing Achieves Record Precision in Human Cells",
    source: "Nature Biotechnology", field: "Genetics", tags: ["CRISPR", "genomics", "medicine"],
    posted: "1d ago",
    summary: "Researchers report a new CRISPR variant that reduces off-target edits by 90%, opening the door for safer therapeutic applications in rare genetic diseases.",
  },
  {
    id: "s2", title: "Webb Telescope Captures Earliest Known Galaxy Cluster",
    source: "Astrophysical Journal", field: "Astronomy", tags: ["Webb", "cosmology", "galaxy"],
    posted: "2d ago",
    summary: "The James Webb Space Telescope has identified a cluster of galaxies dating back to just 650 million years after the Big Bang, challenging existing models of early universe structure.",
  },
  {
    id: "s3", title: "New Antibiotic Compound Defeats Drug-Resistant Bacteria",
    source: "Science", field: "Microbiology", tags: ["antibiotics", "AMR", "health"],
    posted: "3d ago",
    summary: "A team at McMaster University has isolated a novel compound from soil bacteria that eliminates MRSA and other drug-resistant strains without triggering resistance.",
  },
  {
    id: "s4", title: "AI Model Predicts Protein Folding at Atomic Resolution",
    source: "Cell", field: "Computational Biology", tags: ["AI", "proteins", "drug discovery"],
    posted: "4d ago",
    summary: "The latest iteration of structure-prediction AI achieves near-experimental accuracy across all known protein families, dramatically accelerating drug target identification.",
  },
  {
    id: "s5", title: "Arctic Sea Ice Reaches Second Lowest Extent on Record",
    source: "Geophysical Research Letters", field: "Climate Science", tags: ["climate", "Arctic", "environment"],
    posted: "5d ago",
    summary: "August measurements confirm Arctic sea ice coverage at its second lowest since satellite records began, with implications for global weather patterns and polar ecosystems.",
  },
  {
    id: "s6", title: "Quantum Processor Solves Optimization Problem in Seconds",
    source: "Physical Review Letters", field: "Quantum Computing", tags: ["quantum", "computing", "physics"],
    posted: "1w ago",
    summary: "A 1,000-qubit processor demonstrated exponential speed advantage over classical supercomputers on a logistics optimization benchmark, marking a milestone in practical quantum advantage.",
  },
];

export default function SciencePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Science 🔬</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Latest research and discoveries across scientific fields
      </p>

      <div className="flex flex-col gap-4">
        {ARTICLES.map((article) => (
          <div key={article.id} className="card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-base">{article.title}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--primary)" }}>{article.source} · {article.field} · {article.posted}</p>
              </div>
            </div>
            <p className="text-sm" style={{ color: "#6b7280" }}>{article.summary}</p>
            <div className="flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
