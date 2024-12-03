import { convertIsoDateToNormal } from "@/lib/convertIsoDatetoNormal";
import { getData } from "@/lib/getData";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function BlogCard({ training }) {
  const categoryId = training.categoryId;
  const category = await getData(`categories/${categoryId}`);
  const categoryTitle = category.title;
  const normalDate = convertIsoDateToNormal(training.createdAt);
  return (
    <div className="group border  border-black dark:border-[#666666] mb-2 p-2 ">
      <div className="relative">
        <div className="block  ">
          <img
            className="object-cover w-full h-80 transition-all duration-200 transform group-hover:scale-110 p-1"
            src={training.imageUrl}
            alt={training.title}
          />
        </div>
        <span className="absolute px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded left-3 top-3">
          {categoryTitle}
        </span>
      </div>
      <p className="mt-6 text-sm font-medium text-gray-500 dark:text-slate-200">
        {normalDate}
      </p>
      <h2 className="mt-4 text-xl font-bold leading-tight text-gray-900 xl:pr-8">
        <Link
          href={`/blogs/${training.slug}`}
          className="line-clamp-2 dark:text-slate-200"
        >
          {training.title}
        </Link>
      </h2>
      <div className="mt-6 mb-6">
        <Link
          href={`/blogs/${training.slug}`}
          title=""
          className="inline-flex items-center pb-2 text-xs font-bold tracking-widest text-gray-900 uppercase border-b border-gray-900 dark:border-lime-200 group dark:text-lime-200"
        >
          Continue Reading
          <MoveRight className="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
