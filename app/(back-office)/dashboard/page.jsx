import CustomDataTable from "@/app/components/backoffice/CustomDataTable";
import DashboardCharts from "@/app/components/backoffice/DashboardCharts";
import Heading from "@/app/components/backoffice/Heading";
import LargeCards from "@/app/components/backoffice/LargeCards";
import SmallCards from "@/app/components/backoffice/SmallCards";
import React from "react";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <DashboardCharts />
      <CustomDataTable />
    </div>
  );
}
