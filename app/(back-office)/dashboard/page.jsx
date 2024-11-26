import CustomDataTable from "@/app/components/backoffice/CustomDataTable";
import DashboardCharts from "@/app/components/backoffice/DashboardCharts";
import FarmerDashboard from "@/app/components/backoffice/FarmerDashboard";
import Heading from "@/app/components/backoffice/Heading";
import LargeCards from "@/app/components/backoffice/LargeCards";
import SmallCards from "@/app/components/backoffice/SmallCards";
import UserDashboard from "@/app/components/backoffice/UserDashboard";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  const role = session?.user.role;
  const sales = await getData("sales");
  const orders = await getData("orders");
  const products = await getData("products");
  if (role === "USER") {
    return <UserDashboard />;
  }
  if (role === "FARMER") {
    return <FarmerDashboard />;
  }
  return (
    <>
      <div className="bg-white dark:bg-[#252525] pl-8 pt-8">
        <Heading title="Dashboard Overview" />
      </div>
      <LargeCards sales={sales} />
      <SmallCards orders={orders} />
      <DashboardCharts />
      {/* <CustomDataTable /> */}
    </>
  );
}
