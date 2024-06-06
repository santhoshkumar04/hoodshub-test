import React from "react";
import { cn } from "../../lib/utils";

export default function Avatar({ children, size = "md" }) {
  return (
    <span
      className={cn(
        "rounded-full overflow-hidden flex items-center justify-center bg-primary/20 ",
        size === "sm" ? " w-12 h-12" : " w-16 h-16"
      )}
    >
      {children}
    </span>
  );
}
