import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import TableActions from "@/app/components/backoffice/TableActions";
import { getData } from "@/lib/getData";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./columns";
import DataTable from "@/app/components/data-table-components/DataTable";

export default async function page() {
  const markets = await getData("markets");
  return (
    <div className="text-black bg-[#ffffff] dark:bg-[#252525] p-4">
      <PageHeader
        heading="Markets"
        href="/dashboard/markets/new"
        linkTitle="Add Market"
      />

      <div className="py-6">
        <DataTable data={markets} columns={columns} />
      </div>
    </div>
  );
}
