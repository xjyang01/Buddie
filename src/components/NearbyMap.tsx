"use client";
import { useEffect, useRef } from "react";
import type { Person } from "@/lib/data";

type Props = {
  people: (Person & { distance: number })[];
  userLat: number;
  userLng: number;
  onSelect: (id: string) => void;
};

export default function NearbyMap({ people, userLat, userLng, onSelect }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import Leaflet (avoids SSR issues)
    import("leaflet").then((L) => {
      // Fix default icon paths broken by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!).setView([userLat, userLng], 5);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // User marker (orange)
      const userIcon = L.divIcon({
        html: `<div style="
          width:36px;height:36px;border-radius:50%;
          background:linear-gradient(135deg,#f97316,#fb923c);
          border:3px solid white;
          box-shadow:0 2px 8px rgba(249,115,22,0.5);
          display:flex;align-items:center;justify-content:center;
          font-size:18px;line-height:1;
        ">😊</div>`,
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      L.marker([userLat, userLng], { icon: userIcon })
        .addTo(map)
        .bindPopup("<b>You are here</b>")
        .openPopup();

      // People markers
      people.forEach((p) => {
        const icon = L.divIcon({
          html: `<div style="
            width:36px;height:36px;border-radius:50%;
            background:#fff;
            border:3px solid #fed7aa;
            box-shadow:0 2px 6px rgba(0,0,0,0.15);
            display:flex;align-items:center;justify-content:center;
            font-size:18px;line-height:1;cursor:pointer;
          ">${p.avatar}</div>`,
          className: "",
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });

        L.marker([p.lat, p.lng], { icon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family:sans-serif;min-width:140px">
              <div style="font-weight:600;font-size:14px;margin-bottom:2px">${p.avatar} ${p.name}</div>
              <div style="color:#6b7280;font-size:12px;margin-bottom:4px">${p.city}</div>
              <div style="color:#f97316;font-size:12px">${p.distance < 1 ? "< 1 mile away" : `${p.distance.toFixed(0)} miles away`}</div>
            </div>
          `)
          .on("click", () => onSelect(p.id));
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapInstanceRef.current as any).remove();
        mapInstanceRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Leaflet CSS */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div ref={mapRef} style={{ height: "380px", borderRadius: "1rem", zIndex: 0 }} />
    </>
  );
}
