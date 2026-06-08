export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Welcome */}
      <div
        className="rounded-2xl p-8 text-center"
        style={{ background: "linear-gradient(135deg, #fed7aa, #fef3c7)" }}
      >
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          Welcome to Buddie 🌻
        </h1>
        <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#92400e" }}>
          Hopefully, Buddie will make you smart, successful and happy.
        </p>
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
