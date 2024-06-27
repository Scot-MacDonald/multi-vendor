import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import BestSellingProductsCharts from "./BestSellingProductsCharts";

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch mt-[8px] bg-white dark:bg-[#252525]">
      <WeeklySalesChart />
      <BestSellingProductsCharts />
    </div>
  );
}
