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
// import advert from "@/public/advert.gif";
import SidebarCategories from "./SidebarCategories";
import { getData } from "@/lib/getData";
import SecondNav from "./SecondNav";

export default async function Hero() {
  const banners = await getData("banners");
  return (
    <>
      <SecondNav />
      <div className="grid grid-cols-12 gap-2 mb-6 pt-6 ">
        {/* <SidebarCategories /> */}
        <div className="col-span-full md:col-span-6 border border-black overflow-hidden">
          <HeroCarousel banners={banners} />
        </div>
        <div className="col-span-6 hidden md:block border  border-black dark:border-[#666666]  py-4 px-6 ">
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
          {/* <Image src={advert} alt="advert" className="w-full mt-6" /> */}
        </div>
      </div>
    </>
  );
}
