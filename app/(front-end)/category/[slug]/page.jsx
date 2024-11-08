import FilterComponent from "@/app/components/frontend/filter/FilterComponent";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({ params: { slug }, searchParams }) {
  //SORTING AND FILTERING
  const { sort = "asc", min = 0, max = "", page = 1 } = searchParams;
  const category = await getData(`categories/filter/${slug}`);
  const products = await getData(
    `products?catId=${category.id}&page=${page}&sort=${sort}&min=${min}&max=${max}`
  );

  return (
    <div className="w-full py-5">
      {category && products && (
        <FilterComponent category={category} products={products} />
      )}
    </div>
  );
}
