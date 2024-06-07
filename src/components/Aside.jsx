import React, { useState } from "react";
import Button from "./ui/Button";
import { cn } from "../lib/utils";
import { menulist } from "../constants";

export default function Aside({ showMenu }) {
  const [isActive, setIsActive] = useState(1);
  return (
    <aside
      className={cn(
        "overflow-y-scroll overflow-x-hidden w-64 shrink-0 scrollbar-hide bg-primary/10 sticky top-2 rounded-3xl p-4 lg:flex flex-col justify-between h-[91vh] space-y-4",
        showMenu ? "flex" : "hidden"
      )}
    >
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
        <div className="min-w-20">
          <img
            alt="upgradeimg"
            src="./images/marketing.png"
            className="absolute top-0 -left-8 h-36"
          />
        </div>
        <div className="text-[10px] space-y-2 z-[1] pl-1 text-center font-bold flex-col items-center justify-end">
          <span>Upgrade to premium to unlock </span>
          <span className="text-primary">limitless possibilities</span>
          <Button size="sm">Upgrade now</Button>
        </div>
      </div>
    </aside>
  );
}
