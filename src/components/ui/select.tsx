"use client";
import * as React from "react";
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, children, ...props },
  ref
) {
  return (
    <select
      ref={ref}
      className={cn(
        "w-full h-11 rounded-xl border border-neutral-300 bg-white px-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});
