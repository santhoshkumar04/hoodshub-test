import React from "react";
import Button from "./ui/Button";
import { List, Translate, User, X } from "@phosphor-icons/react";

export default function Header({ isopen, onOpenMenu }) {
  const Icon = isopen ? X : List;
  return (
    <header className="flex items-center justify-between py-3">
      <div className="flex items-center gap-2">
        <button
          className="flex-shrink-0 h-full px-5 focus:outline-none lg:hidden"
          onClick={onOpenMenu}
        >
          <Icon size={20} />
        </button>
        <div className="rounded-full uppercase flex items-center justify-center border-textTitle border-2 h-10 w-10">
          <span className="text-[10px] font-bold">Logo</span>
        </div>
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
