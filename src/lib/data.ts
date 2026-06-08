export type Post = {
  id: string;
  author: string;
  authorId: string;
  avatar: string;
  time: string;
  content: string;
  tags: string[];
  likes: number;
  comments: Comment[];
};

export type Comment = {
  id: string;
  author: string;
  avatar: string;
  text: string;
  time: string;
};

export type Person = {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  tags: string[];
  mutual: number;
  followers: number;
  following: number;
  city: string;
  lat: number;
  lng: number;
};

export type Message = {
  id: string;
  fromMe: boolean;
  text: string;
  time: string;
};

export type Conversation = {
  id: string;
  person: Person;
  messages: Message[];
  unread: number;
};

export const PEOPLE: Person[] = [
  { id: "1", name: "Maya Lin",    avatar: "🌸", bio: "Hiker, early riser, bad joke teller",            tags: ["hiking","outdoors","SF"],          mutual: 3, followers: 142, following: 89,  city: "San Francisco, CA", lat: 37.7749,  lng: -122.4194 },
  { id: "2", name: "James Okafor",avatar: "🎸", bio: "Guitar noob. Music is life.",                    tags: ["music","guitar","Brooklyn"],        mutual: 1, followers: 78,  following: 55,  city: "Brooklyn, NY",      lat: 40.6782,  lng: -73.9442  },
  { id: "3", name: "Priya Sharma",avatar: "📚", bio: "Book club organizer & chai addict",              tags: ["books","Austin","bookclub"],        mutual: 5, followers: 210, following: 130, city: "Austin, TX",        lat: 30.2672,  lng: -97.7431  },
  { id: "4", name: "Leo Chen",    avatar: "🍜", bio: "Ramen cartographer of NYC",                      tags: ["food","ramen","NYC"],               mutual: 2, followers: 330, following: 200, city: "Manhattan, NY",     lat: 40.7831,  lng: -73.9712  },
  { id: "5", name: "Sara Kim",    avatar: "🎨", bio: "Watercolor & wine, not necessarily in that order",tags: ["art","watercolor","events"],       mutual: 4, followers: 185, following: 110, city: "Los Angeles, CA",   lat: 34.0522,  lng: -118.2437 },
  { id: "6", name: "Dani Torres", avatar: "🧗", bio: "Bouldering gym regular. Will spot you.",         tags: ["climbing","fitness","gym"],         mutual: 0, followers: 65,  following: 40,  city: "San Francisco, CA", lat: 37.7599,  lng: -122.4148 },
  { id: "7", name: "Alex Park",   avatar: "🎮", bio: "Speedrunner by night, barista by day",           tags: ["gaming","coffee","speedrun"],       mutual: 2, followers: 95,  following: 72,  city: "Seattle, WA",       lat: 47.6062,  lng: -122.3321 },
  { id: "8", name: "Nour Hassan", avatar: "✈️", bio: "Perpetual traveler, 47 countries and counting",  tags: ["travel","photography","adventure"], mutual: 1, followers: 420, following: 310, city: "Chicago, IL",       lat: 41.8781,  lng: -87.6298  },
];

export const POSTS: Post[] = [
  {
    id: "1", author: "Maya Lin", authorId: "1", avatar: "🌸", time: "2h ago",
    content: "Just moved to SF and looking for hiking buddies! I love early morning trails and terrible trail mix. Anyone in the Bay Area?",
    tags: ["hiking", "SF", "outdoors"], likes: 24,
    comments: [
      { id: "c1", author: "Dani Torres", avatar: "🧗", text: "I'm in! I hike Marin Headlands most Saturdays 🏔️", time: "1h ago" },
      { id: "c2", author: "Nour Hassan", avatar: "✈️", text: "SF hiking is incredible. Mt Tam is a must!", time: "45m ago" },
    ],
  },
  {
    id: "2", author: "James Okafor", authorId: "2", avatar: "🎸", time: "4h ago",
    content: "Learning guitar for 3 months now and it's both humbling and amazing. Would love to jam with other beginners — no judgment zone!",
    tags: ["music", "guitar", "beginners"], likes: 41,
    comments: [
      { id: "c3", author: "Sara Kim", avatar: "🎨", text: "3 months is amazing progress! Keep going 🎶", time: "3h ago" },
    ],
  },
  {
    id: "3", author: "Priya Sharma", authorId: "3", avatar: "📚", time: "6h ago",
    content: "Starting a cozy book club in Austin — we meet at coffee shops, read one book a month, and talk way too much about characters. DM me!",
    tags: ["books", "Austin", "bookclub"], likes: 67,
    comments: [
      { id: "c4", author: "Alex Park", avatar: "🎮", text: "I'd love this! What genres are you thinking?", time: "5h ago" },
      { id: "c5", author: "Nour Hassan", avatar: "✈️", text: "Travel memoirs please!! 📖", time: "4h ago" },
      { id: "c6", author: "Maya Lin", avatar: "🌸", text: "I'm moving to Austin next month, save me a seat!", time: "2h ago" },
    ],
  },
  {
    id: "4", author: "Leo Chen", authorId: "4", avatar: "🍜", time: "1d ago",
    content: "Weekend ramen crawl? I've been mapping every ramen spot in NYC for 2 years. Time to find people to eat with me.",
    tags: ["food", "ramen", "NYC"], likes: 88,
    comments: [
      { id: "c7", author: "James Okafor", avatar: "🎸", text: "This is my kind of Saturday", time: "20h ago" },
    ],
  },
  {
    id: "5", author: "Sara Kim", authorId: "5", avatar: "🎨", time: "1d ago",
    content: "Hosting a casual watercolor night at my place next Saturday — BYOB, no experience needed. Just vibes and colors.",
    tags: ["art", "watercolor", "events"], likes: 52,
    comments: [],
  },
  {
    id: "6", author: "Dani Torres", authorId: "6", avatar: "🧗", time: "2d ago",
    content: "Anyone else feel like bouldering gyms are secretly the best place to make friends? I'll spot you if you spot me.",
    tags: ["climbing", "fitness", "gym"], likes: 39,
    comments: [
      { id: "c8", author: "Maya Lin", avatar: "🌸", text: "100%! Started climbing 6 months ago and made so many friends", time: "1d ago" },
    ],
  },
  {
    id: "7", author: "Alex Park", authorId: "7", avatar: "🎮", time: "2d ago",
    content: "Looking for co-op gaming partners for weekend sessions. Timezone: PST. Currently into Stardew Valley and It Takes Two.",
    tags: ["gaming", "co-op", "Stardew"], likes: 61,
    comments: [
      { id: "c9", author: "Priya Sharma", avatar: "📚", text: "Stardew Valley!! I'm in, DM me your friend code", time: "1d ago" },
    ],
  },
  {
    id: "8", author: "Nour Hassan", authorId: "8", avatar: "✈️", time: "3d ago",
    content: "Starting a travel buddy matching thread! Drop your: next destination + travel style (budget/mid/luxury) + vibe (solo explorer/social butterfly). I'll start: Kyoto in October, mid-range, social butterfly 🦋",
    tags: ["travel", "adventure", "kyoto"], likes: 113,
    comments: [
      { id: "c10", author: "Leo Chen", avatar: "🍜", text: "Osaka in November, mid-range, food-obsessed 🍣", time: "2d ago" },
      { id: "c11", author: "Maya Lin", avatar: "🌸", text: "Patagonia in March, budget, outdoorsy! Anyone?", time: "2d ago" },
      { id: "c12", author: "Dani Torres", avatar: "🧗", text: "Patagonia!! @Maya Lin let's talk", time: "1d ago" },
    ],
  },
];

export const CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    person: PEOPLE[0],
    unread: 2,
    messages: [
      { id: "m1", fromMe: false, text: "Hey! Saw your post about hiking — I know some great trails in the Bay Area 🏔️", time: "2h ago" },
      { id: "m2", fromMe: true, text: "Oh amazing! I just moved here and don't know many spots yet", time: "2h ago" },
      { id: "m3", fromMe: false, text: "We should go this weekend! There's a beautiful loop in Marin Headlands", time: "1h ago" },
      { id: "m4", fromMe: false, text: "Are you free Saturday morning?", time: "1h ago" },
    ],
  },
  {
    id: "2",
    person: PEOPLE[2],
    unread: 0,
    messages: [
      { id: "m5", fromMe: true, text: "Hi! Your book club sounds so fun 📚", time: "5h ago" },
      { id: "m6", fromMe: false, text: "Thanks! We're doing our first meeting next week. You should come!", time: "4h ago" },
      { id: "m7", fromMe: true, text: "I'd love that. What book are you reading?", time: "4h ago" },
      { id: "m8", fromMe: false, text: "\"Tomorrow, and Tomorrow, and Tomorrow\" — have you read it?", time: "3h ago" },
    ],
  },
  {
    id: "3",
    person: PEOPLE[3],
    unread: 1,
    messages: [
      { id: "m9", fromMe: false, text: "Ramen crawl this Saturday? I know 4 spots we can hit in one afternoon 🍜", time: "1d ago" },
    ],
  },
];
