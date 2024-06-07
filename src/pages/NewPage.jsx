import React, { useState } from "react";
import AppHeader from "../components/newcomponents/AppHeader";
import AsideMenu from "../components/newcomponents/AsideMenu";
import Home from "../components/Home";
import Button from "../components/ui/Button";
import { Translate, User } from "@phosphor-icons/react";
import NewHome from "../components/newcomponents/NewHome";

export default function NewPage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex flex-row w-full h-full overflow-hidden items-stretch">
      <AsideMenu showMenu={showMenu} onCloseMenu={() => setShowMenu(false)} />
      <div className="flex flex-col h-screen overflow-hidden flex-grow">
        <AppHeader
          title="all issue"
          onOpenMenu={() => setShowMenu(!showMenu)}
          righComponents={
            <>
              <Button variant="outline">Video Survey</Button>
              <Button variant="outline" size="icon">
                <Translate size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <User size={20} />
              </Button>
            </>
          }
        />
        <div className="flex flex-col h-full overflow-auto p-10">
          <NewHome />
        </div>
      </div>
    </div>
  );
}
