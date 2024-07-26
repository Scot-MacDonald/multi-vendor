import React from "react";
import MarketsCarousel from "./MarketsCarousel";

export default function MarketList() {
  return (
    <div className="py-8">
      <h2>Market List</h2>
      <div className="">
        <MarketsCarousel />
      </div>
    </div>
  );
}
