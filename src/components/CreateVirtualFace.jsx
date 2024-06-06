import React from "react";
import StepHeader from "./StepHeader";
import { Input } from "./ui/Input";
import Button from "./ui/Button";

export default function CreateVirtualFace() {
  return (
    <StepHeader title="Step 1: Enter the text to create virtual face">
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-3 space-y-4 flex flex-col">
          <Input placeholder="Enter your prompt" />
          <div className="flex items-center justify-end">
            <Button size="sm">Generate</Button>
          </div>
        </div>
        <div className="col-span-3 grid gap-6 grid-cols-3">
          {[...new Array(3)].map(() => (
            <div className="bg-white p-3 space-y-7 rounded-xl col-span-1">
              <div className="flex items-center justify-center mt-1">
                <span className="rounded-full flex items-center justify-center w-16 h-16 bg-primary/20" />
              </div>
              <div className="flex items-end justify-center">
                <span className="font-semibold text-sm text-textMuted">
                  Example 1
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StepHeader>
  );
}
