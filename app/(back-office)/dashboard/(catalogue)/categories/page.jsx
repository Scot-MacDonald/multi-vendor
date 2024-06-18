import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import TableActions from "@/app/components/backoffice/TableActions";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="text-black">
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add category"
      />
      <h2 className="text-black">Categories</h2>
      <TableActions />
      <div className="py-6">
        <h2>table</h2>
      </div>
    </div>
  );
}
