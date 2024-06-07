import React, { useState } from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Home from "../components/Home";

export default function Mainpage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="px-2 md:px-4 lg:px-6">
      <Header isopen={showMenu} onOpenMenu={() => setShowMenu(!showMenu)} />
      <main className="flex h-full space-x-8">
        <Aside showMenu={showMenu} />
        <Home />
      </main>
    </div>
  );
}
