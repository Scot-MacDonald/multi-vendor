import FilterComponent from "@/app/components/frontend/filter/FilterComponent";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({ params: { slug }, searchParams }) {
  const { sort, min, max } = searchParams;
  console.log(max);

  const category = await getData(`categories/filter/${slug}`);
  // console.log("Category:", category);

  if (!category) {
    return <div>Error: Category not found</div>;
  }

  let products;
  if (max && min) {
    products = await getData(
      `products?catId=${category.id}&sort=asc&min=${min}&max=${max}` // Fixed query string syntax
    );
  } else if (min) {
    products = await getData(
      `products?catId=${category.id}&sort=asc&min=${min}` // Corrected condition, no changes needed here
    );
  } else if (max) {
    // Fixed the condition to check for max instead of min again
    products = await getData(
      `products?catId=${category.id}&sort=asc&max=${max}` // Fixed query string syntax
    );
  } else if (sort) {
    products = await getData(`products?catId=${category.id}&sort=${sort}`);
  } else {
    products = await getData(`products?catId=${category.id}`);
  }

  return (
    <div className="w-full py-10">
      {category && products && (
        <FilterComponent category={category} products={products} />
      )}
    </div>
  );
}
