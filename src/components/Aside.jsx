import React, { useState } from "react";
import Button from "./ui/Button";
import { cn } from "../lib/utils";

const menulist = [
  "Home",
  "Virtual video",
  "Templates",
  "From imports",
  "Feedback forms",
  "Analytics",
  "Saved",
  "Data Storage",
  "Forum",
];

export default function Aside() {
  const [isActive, setIsActive] = useState(1);
  return (
    <aside className="bg-primary/10 w-64 sticky top-0 rounded-3xl p-4 flex flex-col justify-between h-[100vh] space-y-4">
      <ul className="">
        {menulist.map((item, i) => (
          <li
            className="py-0.5 cursor-pointer"
            key={i}
            onClick={() => setIsActive(i)}
          >
            <p
              className={cn(
                "p-2 rounded-md ",
                isActive === i
                  ? "bg-primary text-background font-medium"
                  : "text-textBase font-medium"
              )}
            >
              {item}
            </p>
          </li>
        ))}
      </ul>
      <div className="bg-white relative rounded-2xl p-4 flex ">
        <div className="w-28">
          <img alt="upgradeimg" src="" className="absolute" />
        </div>
        <div className="text-xs font-bold">
          <span>Upgrade to premium to unlock </span>
          <span>limitless possibilities</span>
          <Button size="sm">Upgrade now</Button>
        </div>
      </div>
    </aside>
  );
}
