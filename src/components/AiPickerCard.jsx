import React from "react";
import Avatar from "./ui/Avatar";
import { cn } from "../lib/utils";

export default function AiPickerCard({ icon, label, isActive = false }) {
  const Icon = icon;
  return (
    <div
      className={cn(
        "relative h-36 w-36 p-3 space-y-7 rounded-xl",
        isActive ? "bg-primary/30" : "bg-white"
      )}
    >
      <Avatar size="sm" color={isActive ? "white" : ""}>
        <Icon size={28} className="fill-primary" />
      </Avatar>
      <div className="flex items-end justify-center">
        <span
          className={cn(
            "font-semibold text-sm text-textMuted",
            isActive ? "text-primary" : "text-textMuted"
          )}
        >
          {label}
        </span>
      </div>
      {isActive && (
        <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 -mt-2 rotate-45 bg-[#d7acac]" />
      )}
    </div>
  );
}
