"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsCharts() {
  const data = {
    labels: ["Grass", "Hash", "Edibles", "Gear"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(42, 179, 59, 0.8)",
          "rgba(11, 156, 49, 0.2)",
          "rgba(42, 179, 59, 0.8)",
          "rgba(11, 156, 49, 0.2)",
        ],
        borderColor: [
          "rgba(42, 179, 59, 1)",
          "rgba(11, 156, 49, 1)",
          "rgba(42, 179, 59, 1)",
          "rgba(11, 156, 49, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className=" p-8 rounded-lg h-full">
      <h2 className="text-xl text-black font-bold mb-4">Best Selling Charts</h2>
      <div className="p-4">
        <Pie data={data} />
      </div>
    </div>
  );
}
