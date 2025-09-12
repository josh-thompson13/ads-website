import * as React from "react";
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("block text-sm font-medium text-neutral-800 mb-1", className)}
      {...props}
    />
  );
}
