import React from "react";
import Button from "./ui/Button";
import StepHeader from "./StepHeader";

export default function GeneratedModal() {
  return (
    <StepHeader title="Step 3: Edit the generated modal">
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-2 space-y-4 flex flex-col ">
          <div className="bg-primary/10 flex items-center justify-center rounded-xl p-10">
            <div className="bg-white w-36 p-3 space-y-7 rounded-xl">
              <div className="flex items-center justify-center mt-1">
                <span className="rounded-full flex items-center justify-center w-16 h-16 bg-primary/20" />
              </div>
              <div className="flex items-end justify-center">
                <span className="font-semibold text-sm text-textMuted">
                  Example 1
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button size="sm" variant="outline">
              Edit
            </Button>
            <Button size="sm">Confirm</Button>
          </div>
        </div>
        <div className="col-span-4 space-y-4 flex flex-col">
          <div className="bg-primary/10 flex h-full items-center justify-center rounded-xl p-10">
            <div className="bg-white p-4 text-textMuted rounded-xl">
              <p>Q1: Lorem Ipsum is simply dummy text</p>
              <p>Q2: Lorem Ipsum is simply dummy text of the printing</p>
              <p>Q3: Lorem Ipsum is simply dummy text typesetting industry.</p>
            </div>
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
