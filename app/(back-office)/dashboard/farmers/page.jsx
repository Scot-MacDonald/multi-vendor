import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import TableActions from "@/app/components/backoffice/TableActions";
import DataTable from "@/app/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./columns";

export default async function Coupons() {
  const farmers = await getData("farmers");
  return (
    <div className="text-black bg-[#ffffff] dark:bg-[#252525] p-8">
      <PageHeader
        heading="Farmers"
        href="/dashboard/farmers/new"
        linkTitle="Add Farmer"
      />

      <div className="py-6">
        <DataTable data={farmers} columns={columns} filterKeys={["name"]}/>
      </div>
    </div>
  );
}
