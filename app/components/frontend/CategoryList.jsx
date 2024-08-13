import Link from "next/link";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";

export default function CategoryList({ category }) {
  return (
    <div className="">
      <div className="flex justify-between items-center py-4 ">
        <h2 className="font-bold text-6xl px-1">{category.title}</h2>
        <Link className="" href="#">
          See All
        </Link>
      </div>
      <div className="px-1 ">
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  );
}
