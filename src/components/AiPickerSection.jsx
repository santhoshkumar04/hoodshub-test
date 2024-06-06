import { Article, ClipboardText, SquaresFour } from "@phosphor-icons/react";
import React from "react";
import AiPickerCard from "./AiPickerCard";
const picker = [
  { icon: SquaresFour, label: "Create with AI" },
  { icon: Article, label: "Start with template" },
  { icon: ClipboardText, label: "Frome word, pdf, ppt" },
];

export default function AiPickerSection() {
  return (
    <section className="space-y-8 py-10 border-b">
      <p className="text-center text-base font-medium text-textBase">
        Pick anyone to reach your customers
      </p>
      <div className="flex items-center justify-center space-x-8">
        {picker.map((item, i) => (
          <AiPickerCard key={i} label={item.label} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}
