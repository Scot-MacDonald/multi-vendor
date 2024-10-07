import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import Sorting from "./Sorting";
import Filters from "./Filters";
import FilteredProducts from "./FilteredProducts";
import Paginate from "./Paginate";

export default function FilterComponent() {
  return (
    <>
      <div className="bg-white space-y-10 ">
        <Breadcrumb />
        <Sorting />
        <div className="grid grid-cols-12 pt-10 border-t border-black gap-2">
          <div className="col-span-3">
            <Filters />
          </div>
          <div className="col-span-9">
            <FilteredProducts />
          </div>
        </div>
      </div>
    </>
  );
}
