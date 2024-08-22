import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import React from "react";

export default function SortableColumn({ column, title }) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
