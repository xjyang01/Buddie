import Link from "next/link";

const GROUPS = [
  {
    href: "/people/montrealers",
    emoji: "🍁",
    title: "Montrealers",
    description: "Connect with people living and loving Montreal",
  },
];

export default function PeoplePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">People</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Browse people by community or city
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GROUPS.map((group) => (
          <Link
            key={group.href}
            href={group.href}
            className="card p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-3xl"
              style={{ background: "var(--muted)" }}
            >
              {group.emoji}
            </div>
            <div>
              <p className="font-semibold text-lg">{group.title}</p>
              <p className="text-sm mt-1" style={{ color: "#6b7280" }}>{group.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
