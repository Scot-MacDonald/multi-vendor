import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import TableActions from "@/app/components/backoffice/TableActions";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Coupons() {
  return (
    <div className="text-black bg-[#ffffff] dark:bg-black p-8">
      <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add coupon"
      />

      <TableActions />
      <div className="py-6">
        <h2>table</h2>
      </div>
    </div>
  );
}
