import { Mail, Heart, FlaskConical, ExternalLink } from "lucide-react";

export default function DonationPage() {
  return (
    <div className="max-w-2xl mx-auto">

      {/* Header */}
      <div
        className="rounded-2xl p-8 text-center mb-8"
        style={{ background: "linear-gradient(135deg, #fed7aa, #fef3c7)" }}
      >
        <div className="text-5xl mb-4">🎗️</div>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
          Donate to Research
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "#92400e" }}>
          Help fund life-saving research on cancer and other diseases.
        </p>
      </div>

      {/* Main message */}
      <div className="card p-6 mb-6">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: "var(--muted)" }}
          >
            <Heart size={24} style={{ color: "var(--primary)" }} />
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">How to Donate</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4b5563" }}>
              If you would like to donate money to research on cancer and other diseases,
              please contact us directly. We will provide directions on how to donate to the
              <strong> Goodman Cancer Institute at McGill University</strong> or other
              reputable organizations working on the front lines of disease research.
            </p>
            <a
              href="mailto:etom@buddiespace.app"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: "var(--primary)" }}
            >
              <Mail size={16} />
              etom@buddiespace.app
            </a>
          </div>
        </div>
      </div>

      {/* About Goodman Cancer Institute */}
      <div className="card p-6 mb-6">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "var(--muted)" }}
          >
            <FlaskConical size={24} style={{ color: "var(--primary)" }} />
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Goodman Cancer Institute — McGill University</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#4b5563" }}>
              The Goodman Cancer Institute at McGill University is one of Canada's leading cancer
              research centres, renowned for its groundbreaking work in understanding the molecular
              and cellular mechanisms of cancer. Its researchers have made landmark contributions
              to the fields of tumor biology, cancer metabolism, and targeted therapies — work
              that has directly informed treatments used around the world.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#4b5563" }}>
              Donations to the Goodman Cancer Institute support cutting-edge laboratory research,
              fund graduate students and postdoctoral fellows, and accelerate the translation of
              scientific discoveries into real clinical benefits for patients.
            </p>
            <a
              href="https://www.goodmancancer.ca/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
              style={{ color: "var(--primary)" }}
            >
              Visit goodmancancer.ca <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Why it matters */}
      <div className="card p-6">
        <h2 className="font-bold text-lg mb-4">Why Research Funding Matters</h2>
        <div className="flex flex-col gap-3">
          {[
            { emoji: "🔬", text: "Cancer is the second leading cause of death worldwide. Research funding directly drives the development of new treatments and cures." },
            { emoji: "💊", text: "Every major medical breakthrough — from chemotherapy to immunotherapy — began with basic scientific research funded by donors and governments." },
            { emoji: "🌍", text: "Donations of any size make a difference. They fund equipment, salaries for researchers, and the time needed to pursue high-risk, high-reward science." },
            { emoji: "🎓", text: "Funding research at universities like McGill trains the next generation of scientists who will carry this work forward for decades to come." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xl shrink-0">{item.emoji}</span>
              <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-8 p-6 card">
        <p className="text-sm mb-3" style={{ color: "#6b7280" }}>
          Questions or ready to donate? Reach out and we'll guide you through the process.
        </p>
        <a
          href="mailto:etom@buddiespace.app"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition hover:opacity-90"
          style={{ background: "var(--primary)" }}
        >
          <Mail size={16} /> Contact Xiang-Jiao Yang
        </a>
      </div>

    </div>
  );
}
