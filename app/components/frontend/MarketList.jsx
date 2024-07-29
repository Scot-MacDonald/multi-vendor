import React from "react";
import MarketsCarousel from "./MarketsCarousel";
import { getData } from "@/lib/getData";

export default async function MarketList() {
  const markets = await getData("markets");
  return (
    <div className="py-8">
      <h2>Market List</h2>
      <div className="">
        <MarketsCarousel markets={markets} />
      </div>
    </div>
  );
}
