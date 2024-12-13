// import Heading from "@/components/backoffice/Heading";
// import PageHeader from "@/components/backoffice/PageHeader";
// import TableActions from "@/components/backoffice/TableActions";
import { getData } from "@/lib/getData";

// import Link from "next/link";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "../payments/data-table";

export default async function Customers() {
  const customers = await getData("customers");

  return (
    <div>
      {/* Header */}
      {/* <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupon"
      /> */}
      <h2 className="font-bold text-[16px] uppercase dark:text-white text-black">
        Customers
      </h2>
      <div className="py-8">
        <DataTable data={customers} columns={columns} />
      </div>
    </div>
  );
}
