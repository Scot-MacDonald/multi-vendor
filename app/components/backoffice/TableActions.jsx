import { Download, Search, Trash2 } from "lucide-react";
import React from "react";

export default function TableActions() {
  return (
    <div className="flex justify-between items-center gap-8 py-6 px-8 bg-slate-200 rounded-lg">
      <button className="flex text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-3 mt-1 text-center me-2  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 space-x-2">
        <Download />
        <span>export</span>
      </button>
      <div className=" flex-grow ">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
            placeholder="Search for items"
          />
        </div>
      </div>
      <button className="flex items-center space-x-2 bg-red-600 text-white rounded-lg px-3 py-3">
        <Trash2 />
        <span>Bulk Delete</span>
      </button>
    </div>
  );
}
