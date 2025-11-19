"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

export default function ServiceAreaMap() {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const mapElRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);

  const center: [number, number] = [-28.0167, 153.4];
  const towns: Array<{ name: string; position: [number, number] }> = [
    { name: "Brisbane", position: [-27.4698, 153.0251] },
    { name: "Ipswich", position: [-27.6167, 152.7667] },
    { name: "Toowoomba", position: [-27.5606, 151.9539] },
    { name: "Sunshine Coast", position: [-26.65, 153.0667] },
    { name: "Tweed Heads", position: [-28.1767, 153.5467] },
    { name: "Byron Bay", position: [-28.6474, 153.602] },
  ];

  useEffect(() => {
    // Ensure Leaflet CSS exists
    const cssId = "leaflet-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Load Leaflet JS from CDN once, then init map
    const jsId = "leaflet-js";
    const init = () => {
      try {
        const L = (window as any).L;
        if (!L || !mapElRef.current || mapRef.current) return;
        const map = L.map(mapElRef.current).setView(center, 8);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Circle to indicate service radius (~600km)
        L.circle(center, {
          radius: 600000,
          color: "#4CAF50",
          fillColor: "#4CAF50",
          fillOpacity: 0.08,
        }).addTo(map);

        // Town markers with popups
        towns.forEach((t) => {
          const marker = L.marker(t.position);
          marker.bindPopup(t.name);
          marker.addTo(map);
        });

        mapRef.current = map;
        setStatus("ready");
      } catch (e) {
        setStatus("error");
      }
    };

    if ((window as any).L) {
      init();
    } else {
      let script = document.getElementById(jsId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = jsId;
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.async = true;
        script.onload = init;
        script.onerror = () => setStatus("error");
        document.body.appendChild(script);
      } else if ((window as any).L) {
        init();
      } else {
        script.addEventListener("load", init, { once: true });
      }
    }

    return () => {
      if (mapRef.current) {
        try { mapRef.current.remove(); } catch { }
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-neutral-200">
      <div ref={mapElRef} style={{ height: "100%", width: "100%" }} />
      {status !== "ready" && (
        <div className="absolute inset-0 grid place-items-center text-sm text-neutral-600 bg-white/60 backdrop-blur-[1px]">
          {status === "error" ? "Map failed to load" : "Map loading…"}
        </div>
      )}
    </div>
  );
}
