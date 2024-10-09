import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ title }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <div className="flex">
        <Link href="/">home</Link>
        <ChevronRight className="w-5 h-5" />
        <p>{title}</p>
      </div>
      <p>1-40 of 1000, results</p>
    </div>
  );
}
