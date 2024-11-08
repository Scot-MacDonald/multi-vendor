import FilterComponent from "@/app/components/frontend/filter/FilterComponent";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Search({ searchParams }) {
  //SORTING, SEARCHING AND FILTERING
  const {
    sort = "asc",
    min = 0,
    max = "",
    page = 1,
    search = "",
  } = searchParams;
  const products = await getData(
    `products/search?search=${search}&page=${page}&sort=${sort}&min=${min}&max=${max}`
  );
  const category = {
    title: search,
    slug: "",
    isSearch: true,
    products,
  };
  return (
    <div className="w-full">
      <FilterComponent category={category} products={products} />
    </div>
  );
}
