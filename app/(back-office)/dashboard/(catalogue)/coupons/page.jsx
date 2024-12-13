import Heading from "@/app/components/backoffice/Heading";
import PageHeader from "@/app/components/backoffice/PageHeader";
import DataTable from "@/app/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { Download, Plus, Search, Trash, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Coupons() {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  const role = session?.user?.role;
  // const allCoupons = await getData("coupons");
  // const farmerCoupons = allCoupons.filter((coupon) => coupon.vendorId === id);

  const allCoupons = await getData("coupons").catch((error) => {
    console.error("Error fetching coupons:", error);
    return [];
  });

  // Ensure allCoupons is valid before filtering
  const farmerCoupons = Array.isArray(allCoupons)
    ? allCoupons.filter((coupon) => coupon.vendorId === id)
    : [];

  return (
    <div className="text-black bg-[#ffffff] dark:bg-[#252525]">
      <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add coupon"
      />

      <div className="py-6">
        {role === "ADMIN" ? (
          <DataTable data={allCoupons} columns={columns} />
        ) : (
          <DataTable data={farmerCoupons} columns={columns} />
        )}
      </div>
    </div>
  );
}
