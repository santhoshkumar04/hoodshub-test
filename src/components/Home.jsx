import React from "react";
import AiPickerSection from "./AiPickerSection";
import CreateVirtualVideoSection from "./CreateVirtualVideoSection";
import MyCollections from "./MyCollections";
import { Input } from "./ui/Input";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="flex-1">
      <section className="flex items-center justify-end py-8">
        <div className="relative">
          <Input placeholder="Search..." />
          <MagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
      </section>
      <MyCollections />
      <AiPickerSection />
      <CreateVirtualVideoSection />
    </div>
  );
}
