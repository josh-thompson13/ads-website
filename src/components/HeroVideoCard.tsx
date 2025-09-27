"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
};

export default function HeroVideoCard({ src, poster, className = "", ariaLabel }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ratio, setRatio] = useState<string>("4 / 3");

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handleMeta = () => {
      const w = v.videoWidth || 4;
      const h = v.videoHeight || 3;
      setRatio(`${w} / ${h}`);
    };
    if (v.readyState >= 1) handleMeta();
    v.addEventListener("loadedmetadata", handleMeta, { once: true });
    return () => v.removeEventListener("loadedmetadata", handleMeta);
  }, [src]);

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden border ${className}`} style={{ aspectRatio: ratio }}>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        aria-label={ariaLabel}
        preload="metadata"
      />
    </div>
  );
}

