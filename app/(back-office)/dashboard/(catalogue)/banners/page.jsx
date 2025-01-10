import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import DataTable from "@/app/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./columns";

export default async function page() {
  const banners = await getData("banners");
  return (
    <div className="text-black bg-[#ffffff] dark:bg-[#252525] p-4">
      <PageHeader
        heading="Banners"
        href="/dashboard/banners/new"
        linkTitle="Add Banner"
      />
      <div className="py-6">
        <DataTable data={banners} columns={columns} />
      </div>
    </div>
  );
}
