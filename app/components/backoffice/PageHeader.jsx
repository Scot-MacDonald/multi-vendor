import { Plus } from "lucide-react";
import React from "react";
import Heading from "./Heading";
import Link from "next/link";

export default function PageHeader({ heading, linkTitle, href }) {
  return (
    <div className="flex justify-between py-8">
      <Heading className="text-black" title={heading} />
      <Link
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        href={href}
      >
        <Plus className="" />
        <span className="">{linkTitle}</span>
      </Link>
    </div>
  );
}
