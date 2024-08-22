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
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  // {
  //   accessorKey: "imageUrl",
  //   header: "Product Image",
  //   cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  // },
  {
    accessorKey: "profileImageUrl",
    header: "Profile Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="profileImageUrl" />,
  },

  // {
  //   accessorKey: "description",
  //   header: "Description",
  //   cell: ({ row }) => {
  //     const description = row.getValue("description");

  //     return <div className="line-clamp-1">{description}</div>;
  //   },
  // },
  {
    accessorKey: "isActive",
    header: "Active",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionColumn row={row} title="Farmer" />,
  },
];
