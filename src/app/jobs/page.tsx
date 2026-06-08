import TagPill from "@/components/TagPill";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
  posted: string;
  description: string;
};

const JOBS: Job[] = [
  {
    id: "j1", title: "Frontend Developer", company: "Shopify", location: "Remote (Canada)", type: "Full-time",
    tags: ["React", "TypeScript", "Remote"],
    posted: "2d ago",
    description: "Join our storefront team building the next generation of commerce experiences for millions of merchants worldwide.",
  },
  {
    id: "j2", title: "Data Scientist", company: "RBC", location: "Toronto, ON", type: "Full-time",
    tags: ["Python", "ML", "Finance"],
    posted: "3d ago",
    description: "Use machine learning to drive insights across our retail banking products and improve customer outcomes.",
  },
  {
    id: "j3", title: "UX Designer", company: "Ubisoft Montreal", location: "Montreal, QC", type: "Full-time",
    tags: ["Figma", "Gaming", "UX"],
    posted: "1d ago",
    description: "Design intuitive and immersive player experiences for AAA titles at one of the world's leading game studios.",
  },
  {
    id: "j4", title: "DevOps Engineer", company: "Lightspeed", location: "Montreal, QC", type: "Full-time",
    tags: ["AWS", "Kubernetes", "CI/CD"],
    posted: "5d ago",
    description: "Scale our cloud infrastructure to support high-growth commerce and hospitality platforms globally.",
  },
  {
    id: "j5", title: "Product Manager", company: "Hootsuite", location: "Vancouver, BC", type: "Hybrid",
    tags: ["SaaS", "Agile", "Social Media"],
    posted: "1w ago",
    description: "Lead product strategy for our social media management platform used by over 200,000 businesses.",
  },
  {
    id: "j6", title: "Machine Learning Engineer", company: "Cohere", location: "Remote (Canada)", type: "Full-time",
    tags: ["LLM", "Python", "NLP"],
    posted: "4d ago",
    description: "Build and deploy large language models that power enterprise AI applications for customers worldwide.",
  },
];

export default function JobsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Jobs 💼</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Find opportunities at top Canadian companies
      </p>

      <div className="flex flex-col gap-4">
        {JOBS.map((job) => (
          <div key={job.id} className="card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-lg">{job.title}</p>
                <p className="text-sm font-medium" style={{ color: "var(--primary)" }}>{job.company}</p>
                <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>{job.location} · {job.type} · {job.posted}</p>
              </div>
              <button
                className="px-4 py-2 rounded-xl text-sm font-semibold text-white shrink-0 hover:opacity-90 transition"
                style={{ background: "var(--primary)" }}
              >
                Apply
              </button>
            </div>
            <p className="text-sm" style={{ color: "#6b7280" }}>{job.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {job.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
