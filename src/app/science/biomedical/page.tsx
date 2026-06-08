import TagPill from "@/components/TagPill";
import Link from "next/link";

type NewsReport = {
  id: string;
  headline: string;
  citation: string;
  doi: string;
  pmid?: string;
  tags: string[];
  report: string;
};

const REPORTS: NewsReport[] = [
  {
    id: "bm3",
    headline: "Single-Cell Mapping of Regulatory DNA–Protein Interactions Unveiled",
    citation: "Chi WY, Yoon SH, Goksel E, Mekerishvili L, Pelt J, Lin Y, Prieto T, Zinno J, Ganesan S, Potenski C, Izzo F, Landau DA, Raimondi I. Single-cell mapping of regulatory DNA-protein interactions.",
    doi: "",
    tags: ["single-cell", "chromatin", "epigenomics", "regulatory DNA", "protein interactions"],
    report: `Understanding how proteins interact with regulatory DNA at the single-cell level is one of the most pressing challenges in modern genomics. Regulatory elements — enhancers, promoters, and insulators — do not act in isolation; they are bound and modulated by a constellation of transcription factors and chromatin-associated proteins whose occupancy varies from cell to cell, even within a seemingly homogeneous population.

A new study from researchers at the New York Genome Center, led by Dan A. Landau and Ivan Raimondi, introduces a method for mapping these regulatory DNA–protein interactions at single-cell resolution. By profiling which proteins occupy specific genomic loci on a cell-by-cell basis, the approach captures the heterogeneity in regulatory state that bulk assays inevitably average away.

The work builds on the growing toolkit of single-cell epigenomics — which already includes methods for mapping open chromatin (scATAC-seq) and histone modifications — but pushes further by directly resolving protein occupancy at regulatory sites. This level of resolution is critical for dissecting how gene expression programs diverge across cell types, developmental stages, and disease states.

The implications for cancer biology are particularly significant. Tumour cell populations are notoriously heterogeneous, and regulatory rewiring — rather than coding mutation — is increasingly recognized as a driver of therapy resistance and clonal evolution. A tool that maps regulatory protein interactions at single-cell resolution offers a new lens through which to study these dynamics and identify vulnerabilities that bulk profiling would miss.`,
  },
  {
    id: "bm1",
    headline: "New Protocol Achieves Near-Perfect Efficiency in Site-Directed Mutagenesis",
    citation: "Yang XJ. Curr Protoc. 2026 Jan;6(1):e70303. doi: 10.1002/cpz1.70303. PMID: 41543491. Free PMC article.",
    doi: "10.1002/cpz1.70303",
    pmid: "41543491",
    tags: ["mutagenesis", "protein engineering", "RNA", "plasmid", "methods"],
    report: `Site-directed mutagenesis — the targeted alteration of specific nucleotides in DNA — is a cornerstone technique in molecular biology, underpinning advances in protein engineering, gene therapy, and synthetic biology. Yet despite decades of refinement, many existing methods still fall short of 100% mutagenic efficiency, forcing researchers to screen large numbers of colonies and slowing experimental throughput.

A new protocol published in Current Protocols by Yang XJ addresses this longstanding limitation head-on. The method achieves seamless, highly efficient mutagenesis applicable across three major substrate classes: proteins, RNA, and plasmids. By minimizing background wild-type carryover and streamlining the workflow, the approach dramatically reduces the screening burden typically associated with conventional techniques.

The protocol is particularly notable for its versatility. Whether researchers are engineering enzyme active sites, modifying RNA secondary structures, or altering plasmid regulatory elements, the same streamlined pipeline applies — lowering the barrier to entry and improving reproducibility across laboratories. The open-access availability via PubMed Central further ensures broad dissemination to the research community.`,
  },
  {
    id: "bm2",
    headline: "P3a Mutagenesis Strategy Offers Flexible, Scarless Editing for Genes and Plasmids",
    citation: "Yang XJ. Genes Cancer. 2025 Oct 31;16:34-60. doi: 10.18632/genesandcancer.243. eCollection 2025.",
    doi: "10.18632/genesandcancer.243",
    tags: ["mutagenesis", "cassette mutagenesis", "protein engineering", "plasmid", "cancer biology"],
    report: `Published in Genes & Cancer, this companion study from Yang XJ introduces the P3a framework — a site-specific and cassette mutagenesis strategy designed for seamless engineering of proteins, RNA, and plasmids. Where conventional cassette mutagenesis often leaves behind unwanted sequence scars or restriction sites, P3a achieves clean, traceless edits that preserve the native sequence context around the modified region.

The method's dual capability is a key strength: it supports both precise single-site alterations and the bulk replacement of entire coding or regulatory cassettes within the same experimental system. This makes P3a especially attractive for cancer biology applications, where researchers frequently need to interrogate the functional consequences of oncogenic mutations or reconstruct complex mutational landscapes observed in patient tumours.

Together with the companion Current Protocols paper, this work establishes a coherent, high-efficiency mutagenesis toolkit that is poised to become a standard reference for laboratories engaged in functional genomics, structural biology, and translational research.`,
  },
];

export default function BiomedicalPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <Link href="/science" className="text-sm hover:underline" style={{ color: "var(--primary)" }}>
          ← Science
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-1">Biomedical Science 🧬</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Research news in medicine, genetics, and molecular biology
      </p>

      <div className="flex flex-col gap-6">
        {REPORTS.map((report) => (
          <div key={report.id} className="card p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div>
              <p className="font-bold text-lg leading-snug">{report.headline}</p>
              <p className="text-xs mt-2 italic" style={{ color: "#9ca3af" }}>{report.citation}</p>
              <div className="flex gap-3 mt-1">
                <a
                  href={`https://doi.org/${report.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline"
                  style={{ color: "var(--primary)" }}
                >
                  DOI →
                </a>
                {report.pmid && (
                  <a
                    href={`https://pubmed.ncbi.nlm.nih.gov/${report.pmid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs hover:underline"
                    style={{ color: "var(--primary)" }}
                  >
                    PubMed →
                  </a>
                )}
              </div>
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
