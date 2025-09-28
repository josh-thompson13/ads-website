import * as React from "react";

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/40 text-ink/80 ${className}`}>
      {children}
    </span>
  );
}

