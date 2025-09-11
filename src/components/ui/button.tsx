"use client";
import * as React from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    primary: "bg-teal-700 text-white hover:bg-teal-800 focus-visible:ring-teal-700",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-900 focus-visible:ring-neutral-800",
    outline:
      "border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50 focus-visible:ring-neutral-400",
    ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
  };
  const sizes: Record<string, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4",
    lg: "h-12 px-6 text-lg",
  };
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
