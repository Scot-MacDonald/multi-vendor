import { Plus } from "lucide-react";
import React from "react";
import Heading from "./Heading";
import Link from "next/link";

export default function PageHeader({ heading, linkTitle, href }) {
  return (
    <div className="flex justify-between ">
      <Heading className="text-black" title={heading} />
      <Link
        className=" bg-white text-[#666666]  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center me-2 dark:bg-transparent hover:text-green-600 hover:border-green-600 dark:hover:text-green-600 dark:hover:border-green-600 dark:border-[#666666] border dark:focus:ring-blue-800"
        href={href}
      >
        <Plus className="w-5 h-5" />
        <span className="">{linkTitle}</span>
      </Link>
    </div>
  );
}
