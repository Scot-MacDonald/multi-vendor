import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import DataTable from "@/app/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./columns";

export default async function page() {
  const products = await getData("products");
  return (
    <div className="text-black bg-[#ffffff] dark:bg-[#252525] p-8">
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add product"
      />

      <div className="py-6">
        <DataTable data={products} columns={columns} />
      </div>
    </div>
  );
}
