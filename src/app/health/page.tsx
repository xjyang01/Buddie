import TagPill from "@/components/TagPill";

type HealthPost = {
  id: string;
  title: string;
  author: string;
  avatar: string;
  category: string;
  tags: string[];
  posted: string;
  content: string;
};

const HEALTH_POSTS: HealthPost[] = [
  {
    id: "h1", title: "5 Morning Habits That Changed My Energy Levels",
    author: "Dr. Fatima Al-Rashid", avatar: "👩‍⚕️", category: "Wellness", tags: ["morning", "energy", "habits"],
    posted: "1d ago",
    content: "After years of treating burnout patients, I started practicing what I preach: consistent wake time, 10 minutes of sunlight, and no phone for the first hour. The difference in focus and mood has been remarkable.",
  },
  {
    id: "h2", title: "Running Your First 5K: A Beginner's Honest Guide",
    author: "Marcus Webb", avatar: "🏃", category: "Fitness", tags: ["running", "5K", "beginners"],
    posted: "2d ago",
    content: "I went from barely walking a block to finishing a 5K in 12 weeks. The secret isn't speed — it's consistency and not skipping rest days. Here's the exact plan I followed.",
  },
  {
    id: "h3", title: "The Gut-Brain Connection: What the Latest Research Says",
    author: "Dr. Yuki Tanaka", avatar: "🧠", category: "Nutrition", tags: ["gut health", "microbiome", "mental health"],
    posted: "3d ago",
    content: "Emerging research confirms that the gut microbiome directly influences mood, anxiety, and cognition. Fermented foods, fibre diversity, and reduced ultra-processed food intake all show measurable effects on mental wellbeing.",
  },
  {
    id: "h4", title: "How I Finally Fixed My Sleep After Years of Insomnia",
    author: "Priya Nair", avatar: "😴", category: "Sleep", tags: ["sleep", "insomnia", "CBT"],
    posted: "4d ago",
    content: "CBT-I (Cognitive Behavioral Therapy for Insomnia) worked where melatonin and sleep hygiene tips failed. Eight sessions, no medication, and I'm now sleeping 7 hours consistently for the first time in a decade.",
  },
  {
    id: "h5", title: "Strength Training After 50: Why It's Never Too Late",
    author: "Coach Linda Broussard", avatar: "💪", category: "Fitness", tags: ["strength", "aging", "fitness"],
    posted: "5d ago",
    content: "Muscle loss accelerates after 50, but resistance training reverses it at any age. I work with clients in their 60s and 70s who are stronger now than they were at 40. Starting is the hardest part.",
  },
  {
    id: "h6", title: "Mindfulness Without the Woo: A Skeptic's Approach",
    author: "James Hartley", avatar: "🧘", category: "Mental Health", tags: ["mindfulness", "stress", "mental health"],
    posted: "1w ago",
    content: "I resisted meditation for years. Then I tried a stripped-down, secular 10-minute daily breathing practice. Six months later, my stress response is measurably calmer and I'm less reactive at work.",
  },
];

export default function HealthPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Health 🏃</h1>
      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
        Wellness, fitness, and healthy living
      </p>

      <div className="flex flex-col gap-4">
        {HEALTH_POSTS.map((post) => (
          <div key={post.id} className="card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0"
                style={{ background: "var(--muted)" }}
              >
                {post.avatar}
              </div>
              <div>
                <p className="font-semibold text-base leading-snug">{post.title}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--primary)" }}>
                  {post.author} · {post.category} · {post.posted}
                </p>
              </div>
            </div>
            <p className="text-sm" style={{ color: "#6b7280" }}>{post.content}</p>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
