import React, { useRef } from "react";
import { cn } from "../../lib/utils";
import { useClickOutside } from "../../hooks/useClickOutside";
import { House } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { menulist } from "../../constants";
import Button from "../ui/Button";

export default function AsideMenu({ showMenu, onCloseMenu }) {
  const ref = useRef();

  let classes = cn(
    "absolute lg:static inset-0 transform h-screen duration-300 lg:relative lg:translate-x-0 bg-white flex flex-col flex-shrink-0 w-56 font-sans text-sm text-gray-700 border-r border-gray-100 lg:shadow-none justify-items-start",
    {
      "-translate-x-full ease-out shadow-none": !showMenu,
      "translate-x-0 ease-in shadow-xl": showMenu,
    }
  );

  useClickOutside(ref, () => {
    if (showMenu && onCloseMenu) onCloseMenu();
  });

  return (
    <>
      <div className={classes} ref={ref}>
        <div className="flex flex-col flex-grow-0 flex-shrink-0 px-5 py-3">
          <div className="flex items-center p-2 pr-3 rounded cursor-pointer hover:bg-gray-100">
            <div className="flex text-sm items-center justify-center rounded-full w-6 h-6 text-white bg-yellow-500 mr-2.5">
              G
            </div>
            <div className="text-sm font-medium">github</div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink flex-grow overflow-y-auto mb-0.5 px-4">
          {menulist.map((item, i) => (
            <Link
              key={i}
              to="#"
              className="group relative w-full mt-0.5 py-2 px-2 h-7 flex items-center rounded hover:bg-primary/10 cursor-pointer"
            >
              <House className="w-3.5 h-3.5 mr-4 text-gray-500 group-hover:text-gray-600" />
              <span>{item}</span>
            </Link>
          ))}

          <div className="flex flex-col flex-grow flex-shrink" />
          <div className="px-2 pb-2 text-gray-500 mt-7">
            <div className="bg-background relative rounded-2xl p-4 flex ">
              <div className="text-[10px] space-y-2 z-[1] pl-1 text-center font-bold flex-col items-center justify-end">
                <span>Upgrade to premium to unlock </span>
                <span className="text-primary">limitless possibilities</span>
                <Button size="sm">Upgrade now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
