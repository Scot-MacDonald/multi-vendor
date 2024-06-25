import { Layers, ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ data }) {
  const { title, number, iconBg, iconBorder, icon: Icon } = data;
  return (
    <div
      className={`rounded-lg  text-black dark:text-white  p-4 flex border-solid border border-gray-300 dark:border-[#666666] `}
    >
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${iconBorder} rounded-full items-center flex justify-center`}
        >
          <Icon className="" />
        </div>

        <div className="">
          <p className="text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold">{number}</h3>
        </div>
      </div>
    </div>
  );
}
