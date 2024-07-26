"use client";
import {
  Cannabis,
  CircleDollarSign,
  HelpCircle,
  RefreshCw,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";
import advert from "@/public/advert.gif";

export default function Hero() {
  const categories = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="grid grid-cols-12 gap-8 mb-6 ">
      <div className="md:col-span-3 hidden md:block border border-dashed border-gray-900/25 dark:border-[#666666] rounded-md overflow-hidden">
        <h2 className=" py-4 px-6">Shop by category</h2>

        <div className="py-4 px-6  overflow-y-auto flex flex-col gap-4">
          {categories.map((category, i) => {
            return (
              <>
                <Link
                  key={i}
                  href="#"
                  className="flex items-center gap-3 hover:bg-[#f8f8f8] duration-500 transition-all"
                >
                  <Cannabis size={32} color="#249a38" strokeWidth={1} />
                  <span>Weed</span>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <div className="col-span-full md:col-span-7  rounded-md overflow-hidden">
        <HeroCarousel />
      </div>
      <div className="col-span-2 hidden md:block border border-dashed border-gray-900/25 dark:border-[#666666] rounded-md py-4 px-6 ">
        <Link href="#">
          <div className="flex items-center space-x-3 pb-3">
            <HelpCircle className="shrink-0 w-5 h-5" />
            <div className="flex flex-col ">
              <h2 className="uppercase text-sm">Help Center</h2>
              <p className="text-[0.7rem]">Guide to customer care</p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="flex items-center space-x-3 pb-3">
            <RefreshCw className="shrink-0 w-5 h-5" />
            <div className="flex flex-col ">
              <h2 className="uppercase text-sm">Easy Return</h2>
              <p className="text-[0.7rem]">Quick return</p>
            </div>
          </div>
        </Link>
        <Link href="/register-farmer">
          <div className="flex items-center space-x-3">
            <CircleDollarSign className="shrink-0 w-5 h-5" />
            <div className="flex flex-col ">
              <h2 className="uppercase text-sm">Sell on Blatt</h2>
              <p className="text-[0.7rem]">Million visitors</p>
            </div>
          </div>
        </Link>
        <Image src={advert} alt="advert" className="w-full mt-6" />
      </div>
    </div>
  );
}
