import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import TableActions from "@/app/components/backoffice/TableActions";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Coupons() {
  return (
    <div className="text-black bg-[#ffffff] dark:bg-[#252525] p-8">
      <PageHeader
        heading="Farmers"
        href="/dashboard/farmers/new"
        linkTitle="Add Farmer"
      />

      <TableActions />
      <div className="py-6">
        <h2>table</h2>
      </div>
    </div>
  );
}
