import React from "react";

export default function StepHeader({ title, children }) {
  return (
    <div className="space-y-8 py-4">
      <h3 className="font-medium text-textBase">{title}</h3>
      {children}
    </div>
  );
}
