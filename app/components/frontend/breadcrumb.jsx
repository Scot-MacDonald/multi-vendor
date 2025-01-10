"use client";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  pathArr.shift();
  return (
    <nav className="flex py-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-[0.75rem] font-bold  text-black hover:text-gray-950 dark:text-white dark:hover:text-white"
          >
            {/* <Home className="w-3 h-3 me-2.5" /> */}
            Home
          </Link>
        </li>
        {pathArr.map((item, i) => {
          return (
            <li key={i}>
              <div className="flex items-center">
                <ChevronRight className="rtl:rotate-180 w-3 h-3 font-bold  text-black  dark:text-white  mx-1" />
                <span className="ms-1 text-[0.75rem]  font-bold  text-black hover:text-gray-950 dark:text-white dark:hover:text-white">
                  {item}
                </span>
              </div>
            </li>
          );
        })}
        {/* <li>
          <div className="flex items-center">
            <ChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
            <span
              href="/"
              className="ms-1 text-[0.75rem] text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Products
            </span>
          </div>
        </li> */}
        {/* <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
            <span className="ms-1 text-[0.75rem] text-gray-500 md:ms-2 dark:text-gray-400">
              Flowbitr
            </span>
          </div>
        </li> */}
      </ol>
    </nav>
  );
}
