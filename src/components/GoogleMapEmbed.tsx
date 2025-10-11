'use client';

import { useState } from "react";

type Props = {
  src: string;
  title?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
};

export function GoogleMapEmbed({ src, title, width = "100%", height = 480, className }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 grid place-items-center bg-neutral-100 text-neutral-600">
          <div className="flex flex-col items-center gap-2 text-sm">
            <svg
              className="h-6 w-6 animate-spin text-neutral-500"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
              />
            </svg>
            <span>Loading map...</span>
          </div>
        </div>
      )}
      <iframe
        src={src}
        width={width}
        height={height}
        className={className}
        style={{ border: 0 }}
        loading="lazy"
        title={title ?? "Service area map"}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
