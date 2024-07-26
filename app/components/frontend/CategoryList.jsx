import Link from "next/link";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";

export default function CategoryList() {
  return (
    <div className="">
      <div className="flex justify-between items-center py-4 px-2">
        <h2>Category List</h2>
        <Link className="" href="#">
          See All
        </Link>
      </div>
      <CategoryCarousel />
    </div>
  );
}
