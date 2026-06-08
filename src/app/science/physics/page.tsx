import TagPill from "@/components/TagPill";
import Link from "next/link";

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
    id: "ph1",
    headline: "LHC Detects Hints of a New Force-Carrying Particle Beyond the Standard Model",
    source: "CERN / Physical Review Letters", date: "2024",
    tags: ["particle physics", "LHC", "Standard Model", "CERN"],
    report: `The Large Hadron Collider's LHCb experiment has reported a statistically significant anomaly in the decay rates of B mesons — a discrepancy that, if confirmed, would point to the existence of a new force-carrying boson not predicted by the Standard Model of particle physics.

The deviation sits at 3.8 sigma, below the 5-sigma threshold conventionally required to claim discovery, but high enough to demand serious attention. Theoretical physicists have proposed several candidates, including a Z-prime boson that would mediate a new force acting differently on different generations of leptons, potentially explaining why electrons and muons behave differently than current theory predicts.

The LHC Run 3 dataset, still being analyzed, is expected to either push the anomaly to discovery threshold or rule it out entirely. Either outcome would be scientifically transformative.`,
  },
  {
    id: "ph2",
    headline: "Physicists Achieve Quantum Entanglement Across 1,200 Kilometres via Satellite",
    source: "Science", date: "2024",
    tags: ["quantum", "entanglement", "quantum communication", "satellite"],
    report: `Chinese researchers using the Micius satellite have demonstrated quantum entanglement distribution over a ground distance of 1,200 kilometres — the longest distance over which entangled photon pairs have been maintained with sufficient fidelity for quantum key distribution.

The experiment is a milestone for quantum communication networks, which promise theoretically unbreakable encryption based on the laws of physics rather than computational difficulty. Crucially, the satellite relay approach sidesteps the photon loss problem that limits fibre-optic quantum links to roughly 100 kilometres.

The result brings a global quantum internet — in which entangled nodes in different countries could share cryptographic keys or synchronize quantum computers — meaningfully closer to engineering reality, though significant infrastructure and cost challenges remain.`,
  },
  {
    id: "ph3",
    headline: "Room-Temperature Superconductivity Claim Reignites Debate After Independent Replication Attempt",
    source: "Nature / arXiv", date: "2024–2025",
    tags: ["superconductivity", "condensed matter", "materials science", "replication"],
    report: `The search for a room-temperature superconductor — a material that conducts electricity with zero resistance under ambient conditions — has produced some of physics' most contentious controversies. A 2024 preprint claiming superconductivity in a nitrogen-doped lutetium hydride compound at 21°C briefly electrified the field before replication attempts produced mixed results.

Several independent groups reported failure to reproduce the signature Meissner effect, the hallmark of true superconductivity, under the same synthesis conditions. The original team has disputed these findings, pointing to sample preparation sensitivity as a confounding factor.

The episode highlights the replication crisis in high-pressure superconductivity research, where synthesis conditions are notoriously difficult to reproduce and measurements are prone to artifact. The community is now developing standardized protocols to adjudicate future claims more rigorously.`,
  },
];

export default function PhysicsPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Link href="/science" className="text-sm hover:underline" style={{ color: "var(--primary)" }}>
          ← Science
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-1">Physics ⚛️</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Research news in particle physics, quantum mechanics, and beyond
      </p>

      <div className="flex flex-col gap-6">
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
    </div>
  );
}
