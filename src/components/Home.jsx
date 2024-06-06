import React from "react";
import AiPickerSection from "./AiPickerSection";
import CreateVirtualVideoSection from "./CreateVirtualVideoSection";
import MyCollections from "./MyCollections";

export default function Home() {
  return (
    <div className="flex-1">
      <section>Search</section>
      <MyCollections />
      <AiPickerSection />
      <CreateVirtualVideoSection />
    </div>
  );
}
