import React from "react";
import StepHeader from "./StepHeader";
import Button from "./ui/Button";

export default function ReviewModal() {
  return (
    <StepHeader title="Step 4: Review the modal">
      <div className="flex flex-col">
        <div className="mx-auto w-2/3 space-y-4">
          <div className="overflow-hidden rounded-xl aspect-video">
            <iframe
              title="youtube video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button size="sm" variant="outline">
              Edit
            </Button>
            <Button size="sm">Confirm</Button>
          </div>
        </div>
      </div>
    </StepHeader>
  );
}
