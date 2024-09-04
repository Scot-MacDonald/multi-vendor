import { ChevronRight, Home } from "lucide-react";
import React from "react";

export default function Breadcrumb() {
  return (
    <nav
      className="flex  pl-7 border border-b-8  border-[#f8f8f8] dark:border-[#303030]"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center text-[0.75rem] text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            {/* <Home className="w-3 h-3 me-2.5" /> */}
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
            <a
              href="/"
              className="ms-1 text-[0.75rem] text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Products
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
            <span className="ms-1 text-[0.75rem] text-gray-500 md:ms-2 dark:text-gray-400">
              Flowbitr
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
