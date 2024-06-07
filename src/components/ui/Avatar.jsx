import React from "react";
import { cn } from "../../lib/utils";

export default function Avatar({ children, size = "md", color }) {
  return (
    <span
      className={cn(
        "rounded-full shrink-0 overflow-hidden flex items-center justify-center ",
        size === "sm" ? " w-12 h-12" : " w-16 h-16",
        color === "white" ? "bg-white" : "bg-primary/20"
      )}
    >
      {children}
    </span>
  );
}
