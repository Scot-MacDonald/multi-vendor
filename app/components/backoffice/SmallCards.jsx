import React from "react";
import SmallCard from "./SmallCard";
import {
  Boxes,
  MailCheck,
  Package,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  ShoppingCart,
} from "lucide-react";

export default function SmallCards() {
  const data = [
    {
      title: "Total Orders",
      number: "150",
      iconBg: "bg-green-600",
      iconBorder: "dark:border-[#666666] border-solid border ",
      icon: Boxes,
    },
    {
      title: "Pending Orders",
      number: "100",
      iconBg: "bg-green-600",
      iconBorder: "dark:border-[#666666] border-solid border ",
      icon: ShoppingCart,
    },
    {
      title: "Orders Processing",
      number: "200",
      iconBg: "bg-green-600",
      iconBorder: "dark:border-[#666666] border-solid border ",
      icon: Package,
    },
    {
      title: "Orders Delivered",
      number: "300",
      iconBg: "bg-green-600",
      iconBorder: "dark:border-[#666666] border-solid border ",
      icon: PackageCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 px-8 bg-white dark:bg-black">
      {data.map((data, i) => {
        return <SmallCard data={data} />;
      })}
    </div>
  );
}
