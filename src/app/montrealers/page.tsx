import TagPill from "@/components/TagPill";
import Link from "next/link";

type Montrealer = {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  tags: string[];
  neighbourhood: string;
};

const MONTREALERS: Montrealer[] = [
  { id: "m1", name: "Sophie Tremblay", avatar: "🥐", bio: "Plateau local, brunch enthusiast, bilingual bookworm", tags: ["brunch", "books", "Plateau"], neighbourhood: "Le Plateau-Mont-Royal" },
  { id: "m2", name: "Gabriel Bouchard", avatar: "🏒", bio: "Habs superfan. If the Canadiens lose, I cook poutine to cope.", tags: ["hockey", "food", "Habs"], neighbourhood: "Rosemont" },
  { id: "m3", name: "Mei Nguyen",       avatar: "🎷", bio: "Jazz lover, Mile End wanderer, always up for a jam session", tags: ["jazz", "music", "Mile End"], neighbourhood: "Mile End" },
  { id: "m4", name: "Antoine Leblanc", avatar: "🚴", bio: "Cycling the REV network one lane at a time. Vélo = life.", tags: ["cycling", "outdoors", "STM"], neighbourhood: "Verdun" },
  { id: "m5", name: "Yasmine Khalil",  avatar: "🎨", bio: "Street art hunter, mural festival volunteer every June", tags: ["art", "murals", "MURAL"], neighbourhood: "Saint-Laurent" },
  { id: "m6", name: "Luca Ferreira",   avatar: "🍕", bio: "Expat from São Paulo. Fell in love with smoked meat on day one.", tags: ["food", "coffee", "NDG"], neighbourhood: "Notre-Dame-de-Grâce" },
];

export default function MontrealersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Montrealers 🍁</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Connect with people living and loving Montreal
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MONTREALERS.map((person) => (
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
