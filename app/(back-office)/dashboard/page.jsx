import CustomDataTable from "@/app/components/backoffice/CustomDataTable";
import DashboardCharts from "@/app/components/backoffice/DashboardCharts";
import Heading from "@/app/components/backoffice/Heading";
import LargeCards from "@/app/components/backoffice/LargeCards";
import SmallCards from "@/app/components/backoffice/SmallCards";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-white dark:bg-[#252525] pl-8 pt-8">
        <Heading title="Dashboard Overview" />
      </div>
      <LargeCards />
      <SmallCards />
      <DashboardCharts />
      {/* <CustomDataTable /> */}
    </>
  );
}
