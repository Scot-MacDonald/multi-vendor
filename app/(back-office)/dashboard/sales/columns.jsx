"use client";
import Image from "next/image";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DateColumn from "@/app/components/dataTableColumns/DateColumn";
import ImageColumn from "@/app/components/dataTableColumns/ImageColumn";
import SortableColumn from "@/app/components/dataTableColumns/SortableColumn";
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
    accessorKey: "productImage",
    header: "Product Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="productImage" />,
  },
  {
    accessorKey: "productTitle",
    header: ({ column }) => (
      <SortableColumn column={column} title="Product Title" />
    ),
  },

  {
    accessorKey: "productPrice",
    header: "Price",
  },
  {
    accessorKey: "productQty",
    header: "Qty",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const product = row.original;
  //     return (
  //       <ActionColumn
  //         row={row}
  //         title="Product"
  //         editEndpoint={`products/update/${product.id}`}
  //         endpoint={`products/${product.id}`}
  //       />
  //     );
  //   },
  // },
];
