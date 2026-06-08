import TagPill from "@/components/TagPill";

type EntertainmentItem = {
  id: string;
  title: string;
  type: string;
  genre: string;
  rating: string;
  tags: string[];
  description: string;
  emoji: string;
};

const ITEMS: EntertainmentItem[] = [
  {
    id: "e1", title: "Severance — Season 2", type: "TV Show", genre: "Sci-Fi / Thriller",
    rating: "9.3 / 10", tags: ["Apple TV+", "thriller", "sci-fi"], emoji: "📺",
    description: "The Lumon employees uncover more unsettling truths about the severance procedure in a second season that's even more tense and brilliantly crafted than the first.",
  },
  {
    id: "e2", title: "Dune: Part Three", type: "Film", genre: "Sci-Fi / Epic",
    rating: "Coming 2026", tags: ["cinema", "sci-fi", "epic"], emoji: "🎬",
    description: "Denis Villeneuve returns to Arrakis to complete the trilogy. Early production stills suggest a visually stunning conclusion to Paul Atreides' journey.",
  },
  {
    id: "e3", title: "Kendrick Lamar — GNX", type: "Album", genre: "Hip-Hop",
    rating: "9.0 / 10", tags: ["music", "hip-hop", "album"], emoji: "🎵",
    description: "A surprise drop that cemented Kendrick's legacy. Dense lyricism, west coast production, and an emotional range that rewards repeated listens.",
  },
  {
    id: "e4", title: "The Bear — Season 4", type: "TV Show", genre: "Drama / Comedy",
    rating: "9.1 / 10", tags: ["FX", "drama", "food"], emoji: "📺",
    description: "Carmy and the crew face new pressures as The Bear fights to hold its Michelin star. Relentlessly intense, occasionally hilarious, always human.",
  },
  {
    id: "e5", title: "Hollow Knight: Silksong", type: "Game", genre: "Action / Platformer",
    rating: "Awaited", tags: ["gaming", "indie", "Nintendo"], emoji: "🎮",
    description: "Team Cherry's long-awaited sequel finally has a release window. Hornet's adventure promises a massive world, new mechanics, and the same soul-crushing difficulty.",
  },
  {
    id: "e6", title: "Interstellar — 10th Anniversary Re-release", type: "Film", genre: "Sci-Fi / Drama",
    rating: "8.7 / 10", tags: ["cinema", "IMAX", "Nolan"], emoji: "🎬",
    description: "Christopher Nolan's space epic returns to IMAX screens. If you've never seen it on the big screen, this is the version you've been waiting for.",
  },
];

export default function EntertainmentPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Entertainment 🎬</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Movies, TV, music, and games worth your time
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ITEMS.map((item) => (
          <div key={item.id} className="card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: "var(--muted)" }}
              >
                {item.emoji}
              </div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-xs" style={{ color: "var(--primary)" }}>
                  {item.type} · {item.genre}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>⭐ {item.rating}</p>
              </div>
            </div>
            <p className="text-sm" style={{ color: "#6b7280" }}>{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
