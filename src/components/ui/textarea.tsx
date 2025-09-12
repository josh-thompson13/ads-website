"use client";
import * as React from "react";
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full min-h-24 rounded-xl border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary",
          className
        )}
        {...props}
      />
    );
  }
);
