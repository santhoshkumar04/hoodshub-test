import { List, MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";
import { Input } from "../ui/Input";

export default function AppHeader({ title, onOpenMenu, righComponents }) {
  return (
    <>
      <div className="flex justify-between flex-shrink-0 pl-2 pr-6 border-b border-gray-200 h-14 lg:pl-9">
        {/* left section */}
        <div className="flex items-center">
          <button
            className="flex-shrink-0 h-full px-5 focus:outline-none lg:hidden"
            onClick={onOpenMenu}
          >
            <List className="w-3.5" />
          </button>
          <div className="p-1 font-semibold cursor-default">
            <div className="relative">
              <Input placeholder="Search..." />
              <MagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
            {/* {title} */}
          </div>
        </div>

        {/* right section */}
        <div className="flex items-center gap-2">{righComponents}</div>
      </div>
    </>
  );
}
