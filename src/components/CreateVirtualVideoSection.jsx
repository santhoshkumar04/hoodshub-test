import React from "react";
import ShareAndFeedback from "./ShareAndFeedback";
import ReviewModal from "./ReviewModal";
import GeneratedModal from "./GeneratedModal";
import CreateVirtualFace from "./CreateVirtualFace";
import TextIntract from "./TextIntract";

export default function CreateVirtualVideoSection() {
  return (
    <section className="space-y-8 py-8">
      <h2 className="text-xl font-semibold">
        Create virtual video with your customer mindset with our Hoods Surbie
        generator
      </h2>
      <CreateVirtualFace />
      <TextIntract />
      <GeneratedModal />
      <ReviewModal />
      <ShareAndFeedback />
    </section>
  );
}
