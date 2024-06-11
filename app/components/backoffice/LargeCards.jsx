import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      title: "Today Orders",
      sales: "10000",
      color: "bg-green-600",
    },
    {
      title: "Yesterday Orders",
      sales: "10000",
      color: "bg-green-600",
    },
    {
      title: "This Month",
      sales: "300000",
      color: "bg-green-600",
    },
    {
      title: "All time sales",
      sales: "4000000",
      color: "bg-green-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {orderStats.map((item, i) => {
        return <LargeCard className="bg-green-600" data={item} key={i} />;
      })}
    </div>
  );
}
