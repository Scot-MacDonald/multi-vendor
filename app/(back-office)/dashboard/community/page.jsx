import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./columns";
import DataTable from "@/app/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";

export default async function page() {
  const trainings = await getData("trainings");
  return (
    <div className="text-black bg-[#ffffff] dark:bg-[#252525] p-4">
      <PageHeader
        heading="Community"
        href="/dashboard/community/new"
        linkTitle="Add Post"
      />

      <div className="py-6">
        <DataTable data={trainings} columns={columns} />
      </div>
    </div>
  );
}
