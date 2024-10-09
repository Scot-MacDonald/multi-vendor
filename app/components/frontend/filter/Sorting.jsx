"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sorting({ title, slug }) {
  const pathname = usePathname();

  //   const relevance =
  //   const highToLow =
  //   const lowToHigh =

  const sortingLinks = [
    {
      title: "Relevance",
      href: `/category/${slug}`,
    },
    {
      title: "Price - High to Low",
      href: `/category/${slug}?sort=desc`,
    },
    {
      title: "Price -Low to High",
      href: `/category/${slug}?sort=asc`,
    },
  ];
  return (
    <div className="flex items-center justify-between text-xs text-black    ">
      {/* <h2>Search Results - Electronics </h2> */}
      <h2>{title} </h2>
      <div className="flex items-center justify-between ">
        <p className="mr-2">Sort By:</p>
        <div className="flex ">
          {sortingLinks.map((link, i) => {
            const actualPathName = `${pathname}${link.params}`;
            return (
              <Link
                href={link.href}
                key={i}
                className={`${
                  actualPathName === link.href
                    ? "border border-black text-green-600 px-2 py-1 mr-1"
                    : "border border-black px-2 py-1 mr-1"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
