"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Compass, Bell, User, Plus, MessageCircle, Search, MapPin, Snowflake, Briefcase, FlaskConical, HeartPulse, Clapperboard } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/discover", icon: Compass, label: "Discover" },
  { href: "/people", icon: Snowflake, label: "People" },
  { href: "/jobs", icon: Briefcase, label: "Jobs" },
  { href: "/science", icon: FlaskConical, label: "Science" },
  { href: "/health", icon: HeartPulse, label: "Health" },
  { href: "/entertainment", icon: Clapperboard, label: "Entertainment" },
  { href: "/messages", icon: MessageCircle, label: "Messages" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
  { href: "/profile", icon: User, label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 shadow-sm"
        style={{ background: "var(--card)", borderBottom: "1px solid var(--border)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl shrink-0" style={{ color: "var(--primary)" }}>
          <span className="text-2xl">🌻</span>
          <span className="hidden sm:inline">Buddie</span>
        </Link>

        {/* Search bar (desktop) */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 flex-1 max-w-xs mx-4">
          <div className="relative w-full">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#9ca3af" }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-sm outline-none"
              style={{ border: "1px solid var(--border)", background: "var(--background)" }}
            />
          </div>
        </form>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {/* Mobile search toggle */}
          <button
            className="md:hidden p-2 rounded-xl"
            onClick={() => setSearchOpen(!searchOpen)}
            style={{ color: "#9ca3af" }}
          >
            <Search size={18} />
          </button>

          {links.map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: active ? "var(--primary-light)" : "transparent",
                  color: active ? "var(--primary)" : "var(--foreground)",
                }}
                title={label}
              >
                <Icon size={18} />
                <span className="hidden lg:inline">{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Post button */}
        <Link
          href="/new"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 shrink-0 ml-2"
          style={{ background: "var(--primary)" }}
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Post</span>
        </Link>
      </nav>

      {/* Mobile search bar (slides in) */}
      {searchOpen && (
        <div
          className="fixed top-[57px] left-0 right-0 z-40 px-4 py-3 shadow-md md:hidden"
          style={{ background: "var(--card)", borderBottom: "1px solid var(--border)" }}
        >
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts, people, tags..."
              className="flex-1 px-4 py-2 rounded-xl text-sm outline-none"
              style={{ border: "1px solid var(--border)", background: "var(--background)" }}
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl text-sm font-medium text-white"
              style={{ background: "var(--primary)" }}
            >
              Go
            </button>
          </form>
        </div>
      )}
    </>
  );
}
