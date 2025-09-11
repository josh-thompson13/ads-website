"use client";
import { useEffect, useState } from "react";

export default function ServiceAreaMap() {
  const [mods, setMods] = useState<any | null>(null);

  useEffect(() => {
    // Load Leaflet CSS on client
    const id = "leaflet-css";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
    // Dynamically load react-leaflet only on client; prevent bundler from static-resolving
    try {
      // eslint-disable-next-line no-new-func
      const dyn: (m: string) => Promise<any> = new Function(
        'm',
        'return import(m)'
      ) as any;
      dyn('react-leaflet').then((m) => setMods(m)).catch(() => setMods(null));
    } catch {
      setMods(null);
    }
  }, []);

  const center: [number, number] = [-28.0167, 153.4];
  const towns: Array<{ name: string; position: [number, number] }> = [
    { name: "Brisbane", position: [-27.4698, 153.0251] },
    { name: "Ipswich", position: [-27.6167, 152.7667] },
    { name: "Toowoomba", position: [-27.5606, 151.9539] },
    { name: "Sunshine Coast", position: [-26.65, 153.0667] },
    { name: "Tweed Heads", position: [-28.1767, 153.5467] },
    { name: "Byron Bay", position: [-28.6474, 153.602] },
  ];

  if (!mods) {
    return (
      <div className="h-[420px] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 grid place-items-center text-sm text-neutral-600">
        Map loading…
      </div>
    );
  }

  const { MapContainer, TileLayer, Circle, Marker, Popup } = mods;
  return (
    <div className="h-[420px] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
      <MapContainer center={center} zoom={8} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={center} radius={600000} pathOptions={{ color: "#0b5b68", fillColor: "#0b5b68", fillOpacity: 0.08 }} />
        {towns.map((t) => (
          <Marker key={t.name} position={t.position}>
            <Popup>{t.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
