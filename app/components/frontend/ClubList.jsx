import React from "react";
import { getData } from "@/lib/getData";
import Link from "next/link";

export default async function ClubList() {
  const markets = await getData("markets");
  return (
    <div className="">
      <div className="font-bold text-[16px] ">CANNABIS CLUBS</div>
      <div className="">
        {/* Map through markets and display each title */}
        {markets.map((market, index) => (
          <div key={index} className="group">
            <p className="text-[#666666] uppercase border-b border-black dark:border-[#666666] py-1 text-sm group-hover:border-[#25da01] group-hover:bg-black">
              <Link href={`/market/${market.slug}`}>
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-4 group-hover:text-white">
                  {market.title}
                </span>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
