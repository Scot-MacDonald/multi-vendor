import { getData } from "@/lib/getData";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import CategoryList from "@/app/components/frontend/CategoryList";
import Breadcrumb from "@/app/components/frontend/filter/Breadcrumb";

export default async function page({params:{slug}}) {
  const market = await getData(`markets/details/${slug}`);
  const marketCategoryIds = market.categoryIds;
  const categoriesData = await getData("categories");
  const categories = await categoriesData.filter((category) => {
    return category.products.length > 3;
  });  
  const marketCategories = categories.filter(category=>marketCategoryIds.includes(category.id));
  console.log(marketCategories);
  return (
    <div className="w-full">
    <Breadcrumb/>
    <div className="grid grid-cols-12 gap-6 py-8 w-full">
      <div className="sm:col-span-2 sm:block bg-white p-4 overflow-hidden hidden">
        <div className="">
          <div className="flex items-center justify-center">
            <Image src={market.logoUrl} width={50} height={50} alt={market.title} className="w-14 h-14 rounded-full object-cover"/> 
          </div>
          
            <h2 className="py-4 text-sm text-centers">{market.title}</h2>
            <p className="text-sm line-clamp-2 mb-4">{market.description}</p>
          </div>
        {/* <div className="text-sm flex flex-col">
          <Link className="py-2" href="#">Category 1</Link>
          <Link className="py-2" href="#">Category 1</Link>
          <Link className="py-2" href="#">Category 1</Link>
          <Link className="py-2" href="#">Category 1</Link>
          <Link className="py-2" href="#">Category 1</Link>
        </div> */}
      </div>
      <div className="col-span-full sm:col-span-10">
      {marketCategories.map((category, i) => {
        return (
          <div className="py-8" key={i}>
            <CategoryList isMarketPage={true} category={category} />
          </div>
        );
      })}
      </div>
      </div>
    </div>
  );
}
