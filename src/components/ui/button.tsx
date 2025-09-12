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
    primary: "bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary",
    secondary: "bg-secondary text-white hover:bg-secondary-hover focus-visible:ring-secondary",
    outline: "border border-neutral-300 bg-transparent text-text hover:bg-neutral-50/50 focus-visible:ring-secondary",
    ghost: "bg-transparent hover:bg-neutral-100",
  };
  const sizes: Record<string, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4",
    lg: "h-12 px-6 text-lg",
  };
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
