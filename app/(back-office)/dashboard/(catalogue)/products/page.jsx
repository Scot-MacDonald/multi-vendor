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

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }
  const role = session?.user.role;
  const allProducts = await getData("products");
  const id = session?.user?.id;
  const farmerProducts = allProducts.filter((product) => product.userId === id);
  return (
    <div className="text-black bg-[#ffffff] dark:bg-[#252525] px-8">
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add product"
      />

      <div className="py-6 border ">
        {role === "ADMIN" ? (
          <DataTable data={allProducts} columns={columns} />
        ) : (
          <DataTable data={farmerProducts} columns={columns} />
        )}
      </div>
    </div>
  );
}
