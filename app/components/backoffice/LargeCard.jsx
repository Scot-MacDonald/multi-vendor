import { Cannabis, Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ data }) {
  return (
    <div
      className={`rounded-lg text-black dark:text-white p-8 flex items-center flex-col gap-2 border border-black dark:border-[#666666]  `}
    >
      <Cannabis strokeWidth={1} />

      <h4 className="text-black dark:text-[#666666]">{data.period}</h4>
      <h2 className="lg:text-3xl text-2xl">${data.sales}</h2>
    </div>
  );
}
