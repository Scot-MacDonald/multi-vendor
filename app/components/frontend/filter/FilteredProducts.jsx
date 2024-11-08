import React from "react";
import Product from "../Product";
import Paginate from "./Paginate";

export default async function FilteredProducts({
  products,
  productCount,
  isSearch,
}) {
  //pagination
  const pageSize = 3;
  const totalPages = Math.ceil(productCount / pageSize);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, i) => <Product product={product} key={i} />)
        ) : (
          <p>No products found</p>
        )}
      </div>
      <div className="p-8 mx-auto flex items-center justify-center w-full">
        <Paginate totalPages={totalPages} isSearch={isSearch} />
      </div>{" "}
    </>
  );
}
