import Link from "next/link";
import React from "react";

export default function PriceFilter({ slug }) {
  const priceRanges = [
    {
      display: "under 300",
      max: 300,
    },
    {
      display: "Between 300 and 500",
      max: 500,
      min: 300,
    },
    {
      display: "Between 500 and 700",
      max: 700,
      min: 500,
    },
    {
      display: "Above 700",
      min: 700,
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between">
        <h2>Price</h2>
        <Link href={`/category/${slug}?sort=asc`}>Reset</Link>
      </div>
      <div className="flex flex-col gap-3">
        {priceRanges.map((range, i) => {
          return (
            <Link
              key={i}
              href={
                range.max && range.min
                  ? `/category/${slug}?sort=asc&max=${range.max}&min=${range.min}`
                  : range.max
                  ? `/category/${slug}?sort=asc&max=${range.max}`
                  : `/category/${slug}?sort=asc&min=${range.min}`
              }
            >
              {range.display}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
