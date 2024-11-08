"use client";
import { DoorOpen, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  function handleSearch(data) {
    const { searchTerm } = data;
    console.log(searchTerm);
    reset();
    router.push(`/search?search=${searchTerm}`);
  }
  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex items-center">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          {...register("searchTerm")}
          type="text"
          id="voice-search"
          className="w-full bg-white dark:bg-[#252525] focus:outline-none focus:ring-white focus:border-b-black focus:border-t-0 focus:border-l-0 focus:border-r-0 border-t-0 border-l-0 border-r-0 border-b-black dark:border-b-white text-gray-900 text-sm   focus:border-t-white   p-0    dark:placeholder-gray-400 dark:text-white text-[.65rem] "
          placeholder="Search Products, Categories, Markets..."
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center ms-2 text-sm font-medium text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-[#252525] dark:focus:ring-lime-800"
      >
        <Search className="w-4 h-4 me-2" />
      </button>
    </form>
  );
}
