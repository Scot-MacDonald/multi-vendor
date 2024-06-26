import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [
    {
      title: "Today Orders",
      sales: "10000",
      color: "bg-green-600",
      iconBorder: "border-gray-300 dark:border-[#666666] border-solid border ",
    },
    {
      title: "Yesterday Orders",
      sales: "10000",
      color: "bg-green-600",
      iconBorder: "border-gray-300 dark:border-[#666666] border-solid border ",
    },
    {
      title: "This Month",
      sales: "300000",
      color: "bg-green-600",
      iconBorder: "border-gray-300 dark:border-[#666666] border-solid border ",
    },
    {
      title: "All time sales",
      sales: "4000000",
      color: "bg-green-600",
      iconBorder: "border-gray-300 dark:border-[#666666] border-solid border ",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 px-8 bg-white dark:bg-black">
      {orderStats.map((item, i) => {
        return <LargeCard className="bg-green-600" data={item} key={i} />;
      })}
    </div>
  );
}
