"use client";
import * as React from "react";
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full h-11 rounded-xl border border-neutral-300 bg-white px-3 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary",
        className
      )}
      {...props}
    />
  );
});
