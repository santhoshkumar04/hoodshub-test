import React from "react";
import AiPickerSection from "../AiPickerSection";
import CreateVirtualVideoSection from "../CreateVirtualVideoSection";
import MyCollections from "../MyCollections";

export default function NewHome() {
  return (
    <>
      <MyCollections />
      <AiPickerSection />
      <CreateVirtualVideoSection />
    </>
  );
}
