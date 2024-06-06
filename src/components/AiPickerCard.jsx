import React from "react";
import Avatar from "./ui/Avatar";
import { SquaresFour } from "@phosphor-icons/react";

export default function AiPickerCard({ icon, label }) {
  const Icon = icon;
  return (
    <div className="bg-white h-36 w-36 p-3 space-y-7 rounded-xl">
      <Avatar size="sm">
        <Icon size={28} className="fill-primary" />
      </Avatar>
      <div className="flex items-end justify-center">
        <span className="font-semibold text-sm text-textMuted">{label}</span>
      </div>
    </div>
  );
}
