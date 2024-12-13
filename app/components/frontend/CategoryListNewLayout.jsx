"use client";
import React from "react";
import Link from "next/link";
import ProductNewLayout from "./ProductNewLayout";

export default function CategoryListNewLayout({ category, isMarketPage }) {
  const products = category.products.slice(0, 5); // Limit to 5 products for layout consistency

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center py-2  ">
        <h2 className=" text-3xl font-bold dark:text-slate-100 text-gray-900 sm:text-4xl">
          {category.title}
        </h2>
        <Link
          className="text-black dark:text-white hover:underline text-3xl font-bold   sm:text-4xl"
          href={`/category/${category.slug}`}
        >
          See All
        </Link>
      </div>
      <div
        className="grid grid-rows-2 grid-cols-4 gap-2"
        style={{ height: "600px" }}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`border border-black dark:border-[#666666] p-2 flex ${
              index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
            }`}
          >
            <ProductNewLayout
              product={product}
              isLarge={index === 0} // Pass whether the div is large
            />
          </div>
        ))}
      </div>
    </div>
  );
}
