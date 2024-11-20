import React from "react";
import { getData } from "@/lib/getData";

export default async function TestCol() {
  const markets = await getData("markets");
  const latestMarkets = markets.slice(0, 5); // Get the 5 latest items

  return (
    <div className="">
      <div className="font-bold text-[16px]">CANNABIS CLUBS</div>
      <div
        className="grid grid-rows-2 grid-cols-4 gap-2"
        style={{ height: "600px" }}
      >
        {latestMarkets.map((market, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "col-span-2 row-span-2 h-full w-full text-[#666666] uppercase border border-black dark:border-[#666666] p-2"
                : "col-span-1 row-span-1 h-full w-full text-[#666666] uppercase border border-black dark:border-[#666666] p-2"
            }
          >
            <p>{market.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
