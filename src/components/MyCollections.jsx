import { CaretLeft, CaretRight, PlusCircle } from "@phosphor-icons/react";
import React from "react";
import Avatar from "./ui/Avatar";

export default function MyCollections() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">My Collections</h2>
      <div className="overflow-hidden bg-white flex items-center rounded-xl p-4 space-x-6">
        <CaretLeft size={38} className="fill-primary" />
        <div className="space-x-14 flex items-center">
          {[...new Array(7)].map(() => (
            <Avatar>
              <PlusCircle size={38} className="fill-primary" />
            </Avatar>
          ))}
        </div>
        <CaretRight size={38} className="fill-primary" />
      </div>
    </section>
  );
}
