"use client";
import Image from "next/image";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

import SortableColumn from "@/app/components/dataTableColumns/SortableColumn";
import ImageColumn from "@/app/components/dataTableColumns/ImageColumn";
import DateColumn from "@/app/components/dataTableColumns/DateColumn";
import ActionColumn from "@/app/components/dataTableColumns/ActionColumn";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },

  {
    accessorKey: "couponCode",
    header: "Coupon Code",
  },
  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
    cell: ({ row }) => <DateColumn row={row} accessorKey="expiryDate" />,
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    // cell: ({ row }) => <ActionColumn row={row} title="Category" endpoint={`categories/${row.id}`}/>,
    cell: ({ row }) => {
      const coupon = row.original;
      return (
        <ActionColumn
          row={row}
          title="Coupon"
          editEndpoint={`coupons/update/${coupon.id}`}
          endpoint={`coupons/${coupon.id}`}
        />
      );
    },
  },
];
