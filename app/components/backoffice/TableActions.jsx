import { Download, Search, Trash2 } from "lucide-react";
import React from "react";

export default function TableActions() {
  return (
    <div className="flex justify-between items-center gap-8 py-4 px-0 rounded-lg ">
      <button className="flex text-[#666666] border-gray-300 hover:text-green-700 border hover:border-green-700 dark:hover:border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm px-4 py-3  text-center me-2  dark:border-[#666666] dark:text-[#666666] dark:hover:text-green-700  dark:focus:ring-green-800 space-x-2">
        <Download className="w-5 h-5" />
        <span>Export</span>
      </button>
      <div className=" flex-grow">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-[#666666]" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block bg-white py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-green-700 focus:border-green-700 dark:bg-transparent dark:border-[#666666] dark:placeholder-[#666666] dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-800 w-full"
            placeholder="Search for items"
          />
        </div>
      </div>
      <button className="flex text-[#666666] hover:text-red-600 border hover:border-red-600  border-gray-300 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-4 py-3  text-center me-2  dark:border-[#666666] dark:text-[#666666]dark:hover:text-red-600 dark:hover:bg-black dark:focus:ring-red-800 space-x-2">
        <Trash2 className="w-5 h-5" />
        <span className="text-sm">Bulk Delete</span>
      </button>
    </div>
  );
}
