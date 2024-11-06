import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import Sorting from "./Sorting";
import Filters from "./Filters";
import FilteredProducts from "./FilteredProducts";
import Paginate from "./Paginate";

export default function FilterComponent({ category, products }) {
  const { title, slug } = category;
  return (
    <>
      <div className="bg-white dark:bg-[#252525] space-y-5 py-5">
        <Breadcrumb title={title} />
        <Sorting title={title} slug={slug} />
        <div className="grid grid-cols-12 pt-4 border-t border-black dark:border-[#666666] gap-4">
          <div className="col-span-3 ">
            <Filters slug={slug} />
          </div>
          <div className="col-span-9">
            <FilteredProducts products={products} />
          </div>
        </div>
      </div>
    </>
  );
}
