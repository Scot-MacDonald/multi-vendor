import Link from "next/link";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";

export default function CategoryList({ category, isMarketPage }) {
  return (
    <div className="pb-6  text-slate-800 overflow-hidden">
      <div className="py-3 px-1 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
        <h2>{category.title}</h2>
        <Link
          className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
          href={`/category/${category.slug}`}
        >
          See All
        </Link>
      </div>
      <div className="bg-white dark:bg-slate-700 ">
        <CategoryCarousel
          isMarketPage={isMarketPage}
          products={category.products}
        />
      </div>
    </div>
  );
}

// New Layout

//("use client");
// import React from "react";
// import Link from "next/link";
// import Product from "./Product"; // Import the Product component

// export default function CategoryList({ category }) {
//   const products = category.products.slice(0, 5); // Limit to 5 products for layout consistency

//   return (
//     <div className="py-4">
//       <div className="flex justify-between items-center py-4">
//         <h2 className="font-bold text-6xl px-1">{category.title}</h2>
//         <Link
//           className="text-blue-500 hover:underline"
//           href={`/category/${category.slug}`}
//         >
//           See All
//         </Link>
//       </div>
//       <div
//         className="grid grid-rows-2 grid-cols-4 gap-2"
//         style={{ height: "600px" }}
//       >
//         {products.map((product, index) => (
//           <div
//             key={product.id}
//             className={
//               index === 0
//                 ? "col-span-2 row-span-2 h-full w-full border border-black dark:border-[#666666] p-2"
//                 : "col-span-1 row-span-1 h-full w-full border border-black dark:border-[#666666] p-2"
//             }
//           >
//             <Product product={product} />{" "}
//             {/* Render each product using the Product component */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
