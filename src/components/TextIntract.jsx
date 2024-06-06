import React from "react";
import StepHeader from "./StepHeader";
import { Input } from "./ui/Input";
import Button from "./ui/Button";

export default function TextIntract() {
  return (
    <StepHeader title="Step 2: Enter the text to intract">
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-3 space-y-4 flex flex-col">
          <Input placeholder="Enter your prompt" />
          <div className="flex items-center justify-between">
            <Button size="sm" variant="outline">
              Template
            </Button>
            <Button size="sm">Generate</Button>
          </div>
        </div>
        <div className="col-span-3 grid gap-6 grid-cols-5">
          {[...new Array(5)].map(() => (
            <div className="bg-white rounded-xl py-2 uppercase text-center">
              <p className="uppercase text-sm text-textMuted">q1</p>
              <p className="uppercase text-sm text-textMuted">q2</p>
              <p className="uppercase text-sm text-textMuted">q3</p>
              <p className="uppercase text-sm text-textMuted">q4</p>
              <p className="uppercase text-sm text-textMuted">q5</p>
            </div>
          ))}
        </div>
      </div>
    </StepHeader>
  );
}
