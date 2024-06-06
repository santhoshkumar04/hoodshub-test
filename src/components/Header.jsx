import React from "react";
import Button from "./ui/Button";
import { Translate, User } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-3">
      <div className="rounded-full uppercase flex items-center justify-center border-textTitle border-2 h-10 w-10">
        <span className="text-[10px] font-bold">Logo</span>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline">Video Survey</Button>
        <Button variant="outline" size="icon">
          <Translate size={20} />
        </Button>
        <Button variant="outline" size="icon">
          <User size={20} />
        </Button>
      </div>
    </header>
  );
}
