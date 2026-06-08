"use client";
import { useState, useEffect, useMemo } from "react";
import { MapPin, Sliders, MessageCircle } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import TagPill from "@/components/TagPill";
import { PEOPLE } from "@/lib/data";
import { distanceMiles, formatDistance } from "@/lib/geo";

// Dynamic import — map uses browser APIs, can't SSR
const NearbyMap = dynamic(() => import("@/components/NearbyMap"), { ssr: false });

type LocationState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "denied" }
  | { status: "ready"; lat: number; lng: number; city: string };

const RADIUS_OPTIONS = [10, 25, 50, 100, 500];

export default function NearbyPage() {
  const [location, setLocation] = useState<LocationState>({ status: "idle" });
  const [radius, setRadius] = useState(50);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [view, setView] = useState<"map" | "list">("map");

  const requestLocation = () => {
    setLocation({ status: "loading" });
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          status: "ready",
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          city: "Your location",
        });
      },
      () => setLocation({ status: "denied" })
    );
  };

  // Auto-request on mount
  useEffect(() => { requestLocation(); }, []);

  const peopleWithDistance = useMemo(() => {
    if (location.status !== "ready") return [];
    return PEOPLE
      .map((p) => ({
        ...p,
        distance: distanceMiles(location.lat, location.lng, p.lat, p.lng),
      }))
      .filter((p) => p.distance <= radius)
      .sort((a, b) => a.distance - b.distance);
  }, [location, radius]);

  const selectedPerson = peopleWithDistance.find((p) => p.id === selectedId);

  // ── Loading / permission states ───────────────────────────────────────────
  if (location.status === "idle" || location.status === "loading") {
    return (
      <div className="max-w-2xl mx-auto text-center py-24">
        <div className="text-5xl mb-4 animate-pulse">📍</div>
        <h2 className="text-xl font-bold mb-2">Finding your location…</h2>
        <p style={{ color: "#9ca3af" }} className="text-sm">Allow location access when your browser asks</p>
      </div>
    );
  }

  if (location.status === "denied") {
    return (
      <div className="max-w-md mx-auto text-center py-24">
        <div className="text-5xl mb-4">🔒</div>
        <h2 className="text-xl font-bold mb-2">Location access denied</h2>
        <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
          Buddie needs your location to show nearby friends. Enable it in your browser settings and try again.
        </p>
        <button
          onClick={requestLocation}
          className="px-6 py-2.5 rounded-xl font-semibold text-white"
          style={{ background: "var(--primary)" }}
        >
          Try again
        </button>
      </div>
    );
  }

  // ── Main UI ───────────────────────────────────────────────────────────────
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <MapPin size={22} style={{ color: "var(--primary)" }} /> Near Me
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "#9ca3af" }}>
            {peopleWithDistance.length} Buddies within {radius} miles
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Radius selector */}
          <div className="flex items-center gap-2 px-3 py-2 card">
            <Sliders size={14} style={{ color: "#9ca3af" }} />
            <span className="text-xs font-medium" style={{ color: "#9ca3af" }}>Radius:</span>
            <select
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="text-sm font-semibold outline-none bg-transparent"
              style={{ color: "var(--foreground)" }}
            >
              {RADIUS_OPTIONS.map((r) => (
                <option key={r} value={r}>{r} mi</option>
              ))}
            </select>
          </div>

          {/* View toggle */}
          <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            {(["map", "list"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className="px-4 py-2 text-sm font-medium capitalize transition"
                style={view === v
                  ? { background: "var(--primary)", color: "white" }
                  : { background: "var(--card)", color: "#9ca3af" }
                }
              >
                {v === "map" ? "🗺 Map" : "☰ List"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        {/* Left panel: map or list */}
        <div className="flex-1 min-w-0">
          {view === "map" ? (
            <div className="card overflow-hidden">
              <NearbyMap
                people={peopleWithDistance}
                userLat={location.lat}
                userLng={location.lng}
                onSelect={(id) => { setSelectedId(id); setView("map"); }}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {peopleWithDistance.length === 0 ? (
                <div className="card p-12 text-center" style={{ color: "#9ca3af" }}>
                  <p className="text-4xl mb-3">🌍</p>
                  <p className="font-medium mb-1">No one nearby yet</p>
                  <p className="text-sm">Try increasing your radius</p>
                </div>
              ) : (
                peopleWithDistance.map((person) => (
                  <div
                    key={person.id}
                    className="card p-4 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow"
                    style={selectedId === person.id ? { borderColor: "var(--primary)" } : {}}
                    onClick={() => setSelectedId(selectedId === person.id ? null : person.id)}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0" style={{ background: "var(--muted)" }}>
                      {person.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold">{person.name}</p>
                      <p className="text-xs flex items-center gap-1 mt-0.5" style={{ color: "var(--primary)" }}>
                        <MapPin size={11} /> {formatDistance(person.distance)} · {person.city}
                      </p>
                      <p className="text-sm mt-1 truncate" style={{ color: "#6b7280" }}>{person.bio}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 shrink-0 max-w-[120px]">
                      {person.tags.slice(0, 2).map((t) => <TagPill key={t} tag={t} />)}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Right panel: person detail */}
        <div className="hidden lg:block w-72 shrink-0">
          {selectedPerson ? (
            <div className="card p-5 sticky top-20">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-2" style={{ background: "var(--muted)" }}>
                  {selectedPerson.avatar}
                </div>
                <h3 className="font-bold text-lg">{selectedPerson.name}</h3>
                <p className="text-xs flex items-center justify-center gap-1 mt-1" style={{ color: "var(--primary)" }}>
                  <MapPin size={11} /> {formatDistance(selectedPerson.distance)}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>{selectedPerson.city}</p>
              </div>

              <p className="text-sm text-center mb-4" style={{ color: "#6b7280" }}>{selectedPerson.bio}</p>

              <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                {selectedPerson.tags.map((t) => <TagPill key={t} tag={t} />)}
              </div>

              <div className="flex gap-2 text-sm mb-4 justify-center">
                <span><b>{selectedPerson.followers}</b> <span style={{ color: "#9ca3af" }}>followers</span></span>
                <span style={{ color: "var(--border)" }}>·</span>
                <span><b>{selectedPerson.following}</b> <span style={{ color: "#9ca3af" }}>following</span></span>
              </div>

              {selectedPerson.mutual > 0 && (
                <p className="text-center text-xs mb-4" style={{ color: "var(--primary)" }}>
                  {selectedPerson.mutual} mutual friend{selectedPerson.mutual > 1 ? "s" : ""}
                </p>
              )}

              <div className="flex flex-col gap-2">
                <button
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "var(--primary)" }}
                >
                  Follow
                </button>
                <Link
                  href="/messages/1"
                  className="w-full py-2.5 rounded-xl text-sm font-medium border flex items-center justify-center gap-1.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <MessageCircle size={14} /> Message
                </Link>
                <Link
                  href={`/user/${selectedPerson.id}`}
                  className="text-center text-xs mt-1"
                  style={{ color: "var(--primary)" }}
                >
                  View full profile →
                </Link>
              </div>
            </div>
          ) : (
            <div className="card p-6 text-center sticky top-20" style={{ color: "#9ca3af" }}>
              <p className="text-3xl mb-3">👆</p>
              <p className="text-sm">
                {view === "map" ? "Click a pin on the map" : "Click someone in the list"} to see their profile
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: selected person sheet */}
      {selectedPerson && (
        <div
          className="lg:hidden fixed bottom-0 left-0 right-0 z-50 card p-4 rounded-b-none"
          style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.1)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl" style={{ background: "var(--muted)" }}>
              {selectedPerson.avatar}
            </div>
            <div className="flex-1">
              <p className="font-semibold">{selectedPerson.name}</p>
              <p className="text-xs" style={{ color: "var(--primary)" }}>
                <MapPin size={10} className="inline" /> {formatDistance(selectedPerson.distance)}
              </p>
            </div>
            <button onClick={() => setSelectedId(null)} className="text-lg" style={{ color: "#9ca3af" }}>✕</button>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "var(--primary)" }}>
              Follow
            </button>
            <Link href="/messages/1" className="flex-1 py-2 rounded-xl text-sm font-medium border text-center flex items-center justify-center gap-1" style={{ borderColor: "var(--border)" }}>
              <MessageCircle size={13} /> Message
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
