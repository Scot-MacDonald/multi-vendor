import FilterComponent from "@/app/components/frontend/filter/FilterComponent";
import React from "react";

export default function page({ params: { slug } }) {
  return (
    <div className="w-full py-10">
      <FilterComponent />
    </div>
  );
}
