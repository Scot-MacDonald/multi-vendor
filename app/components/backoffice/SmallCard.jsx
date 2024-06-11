import { Layers, ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ data }) {
  const { title, number, iconBg, icon: Icon } = data;
  return (
    <div
      className={`rounded-lg  text-black shadow-lg p-4 flex border-solid border border-black `}
    >
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}
        >
          <Icon className="" />
        </div>

        <div className="">
          <p>{title}</p>
          <h3 className="text-2xl font-bold">{number}</h3>
        </div>
      </div>
    </div>
  );
}
