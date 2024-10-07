import Link from "next/link";
import React from "react";

export default function Sorting() {
  return (
    <div className="flex items-center justify-between text-xs text-green-500">
      <h2>Search Results - Electronics </h2>
      <div className="flex items-center justify-between ">
        <p className="mr-2">Sort By:</p>
        <div className="flex ">
          <Link href="" className="border border-black px-2 py-1 mr-1">
            Relevance
          </Link>
          <Link href="" className="border border-black px-2 py-1 mr-1">
            Price High to Low
          </Link>
          <Link href="" className="border border-black px-2 py-1 ">
            Price Low to High
          </Link>
        </div>
      </div>
    </div>
  );
}
