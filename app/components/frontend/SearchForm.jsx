import { DoorOpen, Search } from "lucide-react";
import React from "react";

export default function SearchForm() {
  return (
    <form className="flex items-center">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          id="voice-search"
          className="w-full bg-white focus:outline-none focus:ring-white focus:border-b-black focus:border-t-0 focus:border-l-0 focus:border-r-0 border-t-0 border-l-0 border-r-0 border-b-black text-gray-900 text-sm   focus:border-t-white  p-0  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white text-[.65rem] "
          placeholder="Search Products, Categories, Markets..."
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center ms-2 text-sm font-medium text-black  hover:border-b-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
      >
        <Search className="w-4 h-4 me-2" />
      </button>
    </form>
  );
}
