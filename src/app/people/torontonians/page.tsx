import TagPill from "@/components/TagPill";
import Link from "next/link";

type Torontonian = {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  tags: string[];
  neighbourhood: string;
};

const TORONTONIANS: Torontonian[] = [
  { id: "t1", name: "Olivia Martins",  avatar: "🏀", bio: "Raptors die-hard, Kensington Market regular, oat milk convert", tags: ["basketball", "Raptors", "Kensington"], neighbourhood: "Kensington Market" },
  { id: "t2", name: "Ethan Kowalski",  avatar: "🚇", bio: "TTC survivor. If I made it through Line 1, I can do anything.", tags: ["transit", "urbanism", "cycling"], neighbourhood: "Annex" },
  { id: "t3", name: "Aisha Ogundimu",  avatar: "🎭", bio: "Theatre kid turned theatre adult. TIFF volunteer every September.", tags: ["film", "theatre", "TIFF"], neighbourhood: "Queen West" },
  { id: "t4", name: "Daniel Chow",     avatar: "🥟", bio: "Dim sum cartographer of Scarborough. Ask me anything.", tags: ["food", "dimsum", "Scarborough"], neighbourhood: "Scarborough" },
  { id: "t5", name: "Preet Sandhu",    avatar: "🏃", bio: "Running the Waterfront trail every Sunday. Slow but consistent.", tags: ["running", "fitness", "Waterfront"], neighbourhood: "Liberty Village" },
  { id: "t6", name: "Chloe Beaumont",  avatar: "📸", bio: "Street photographer, Distillery District enthusiast, cold brew addict", tags: ["photography", "art", "Distillery"], neighbourhood: "Distillery District" },
];

export default function TorontoniansPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Torontonians 🏙️</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Connect with people living and loving Toronto
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TORONTONIANS.map((person) => (
          <div key={person.id} className="card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ background: "var(--muted)" }}
              >
                {person.avatar}
              </div>
              <div>
                <p className="font-semibold">{person.name}</p>
                <p className="text-xs" style={{ color: "var(--primary)" }}>{person.neighbourhood}</p>
              </div>
            </div>
            <p className="text-sm" style={{ color: "#6b7280" }}>{person.bio}</p>
            <div className="flex flex-wrap gap-1.5">
              {person.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 py-2 rounded-xl text-sm font-semibold transition hover:opacity-90"
                style={{ background: "var(--primary-light)", color: "var(--primary)" }}
              >
                Follow
              </button>
              <Link
                href="/messages"
                className="px-4 py-2 rounded-xl text-sm font-medium border transition hover:opacity-80 flex items-center"
                style={{ borderColor: "var(--border)" }}
              >
                Say Hi 👋
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
