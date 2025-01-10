import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import TableActions from "@/app/components/backoffice/TableActions";
import DataTable from "@/app/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./columns";

export default async function page() {
  const categories = await getData("categories");
  return (
    <div className="text-black bg-[#ffffff] dark:bg-[#252525] p-4">
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add category"
      />

      <div className="py-6">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
