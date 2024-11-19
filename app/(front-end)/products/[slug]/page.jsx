// "use client";

import { ShoppingCart } from "lucide-react";
import React from "react";

import { Share2 } from "lucide-react";
import { Tag, Minus, Plus, Send } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/app/components/frontend/Breadcrumb";
import { getData } from "@/lib/getData";
import CategoryCarousel from "@/app/components/frontend/CategoryCarousel";
import Image from "next/image";
import AddToCartButton from "@/app/components/frontend/AddToCartButton";

export default async function ProductDetailPage({ params: { slug } }) {
  const product = await getData(`/products/product/${slug}`);
  const {id} = product;
  const catId = product.categoryId;
  const category = await getData(`categories/${catId}`);
  const categoryProducts = category.products;
  const products = categoryProducts.filter((product)=> product.id!==id);
  return (
    <div className="w-full">
      <Breadcrumb />
      <div className="grid grid-cols-12  h-[calc(100vh-150px)] overflow-auto   border-l-8 border-r-8 border-b-8  border-[#f8f8f8] dark:border-[#303030]">
        <div className="col-span-7 flex justify-center items-center border-r-8  border-[#f8f8f8] dark:border-[#303030]">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="max-w-[550px] w-full pb-40"
          />
        </div>
        <div className="col-span-5 ">
          <div className=" flex px-5 items-center justify-between h-[110px] border-b-8  border-[#f8f8f8] dark:border-[#303030]">
            <h1 className="text-xl lg:text-3xl font-semibold uppercase ">
              {product.title}
            </h1>
            <button>
              <Share2 />
            </button>
          </div>
          <div className="border-b border-dashed border-gray-900/25">
            <p className="py-2 px-5 text-[.85rem] text-[#b2b2b2]">
              {product.description}
            </p>{" "}
            <div className="flex items-center gap-8 mb-4 px-5">
              <p>{product.sku}</p>
              <p className="bg-lime-100 py-1.5 px-4 rounded-full text-slate-900 ">
                <b>Stock</b>: {product.productStock}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 px-5 pt-4 border-b border-dashed border-gray-900/25 pb-4">
            <div className="flex  items-center gap-4 ">
              <h4 className="text-2xl">€{product.productPrice}</h4>
              <del className="text-slate-400 text-sm">€{product.salePrice}</del>
            </div>
            <p className="flex items-center">
              <Tag className="w-5 h-5 text-slate-400 me-2 " />
              <span>Save 90% now</span>
            </p>
          </div>
          <div className="flex justify-between items-center px-5 py-6">
            <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
              <button className="border-r border-gray-400 py-2 px-4">
                <Minus />
              </button>
              <p className="flex-grow py-2 px-4">1</p>
              <button className="border-l border-gray-400 py-2 px-4">
                <Plus />
              </button>
            </div>
            <AddToCartButton product={product}/>
          </div>
          <div className="hidden md:block  overflow-hidden">
            <h2 className="bg-[#f8f8f8] dark:bg-[#f8f8f8] py-4 px-6 font-semibold  text-slate-800 dark:text-slate-100">
              Delivery and Returns
            </h2>
            <div className="px-4 py-4">
              <div className="flex py-2 px-4 bg-green-400 text-slate-50 items-center gap-3">
                <span>Blatt Express</span>
                <Send />
              </div>
              <div className="py-3 border-b border-gray-500">
                Eligible for free Delivery
                <Link href="#">View Details</Link>
              </div>
              <h2 className="py-2">Choose your Location</h2>
              <div className="border-b border-gray-500 pb-3">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Kreuzburg</option>
                  <option>Mitte</option>
                  <option>Neuköln</option>
                  <option>Friedrichshain</option>
                  <option>Charlottenburg</option>
                  <option>Pankow</option>
                  <option>Wedding</option>
                </select>
              </div>
              <div className="border-b border-gray-500 pb-3 pt-3">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Kreuzburg</option>
                  <option>Mitte</option>
                  <option>Neuköln</option>
                  <option>Friedrichshain</option>
                  <option>Charlottenburg</option>
                  <option>Pankow</option>
                  <option>Wedding</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-700 my-8 rounded-xl p-4">
        <h2 className="mb-4 text-xl font-semibold text-slate-200 ml-3">
          Similar Products
        </h2>
        <CategoryCarousel products={categoryProducts} />
      </div>
    </div>
  );
}
