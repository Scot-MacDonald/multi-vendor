import Link from "next/link";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";

export default function CategoryList({ category }) {
  return (
    <div className="">
      <div className="flex justify-between items-center py-4 px-2">
        <h2>{category.title}</h2>
        <Link className="" href="#">
          See All
        </Link>
      </div>
      <CategoryCarousel products={category.products} />
    </div>
  );
}
