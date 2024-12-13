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
import ClubList from "./ClubList";

export default async function Hero() {
  const banners = await getData("banners");
  return (
    <>
      <div className="grid grid-cols-12 gap-2 mb-0 pt-6 h-[calc(100vh-10rem)] ">
        {/* <SidebarCategories /> */}

        <div className="col-span-full md:col-span-6  ">
          <div className="flex flex-col h-full gap-2">
            {/* First nested h-1/2 */}
            <div className="h-1/2 border border-black dark:border-[#666666] flex items-center justify-center overflow-hidden flex-grow p-2 ">
              {/* <HeroCarousel banners={banners} /> */}
              <div className="bg-gray-100 w-full h-full"></div>
            </div>
            {/* Second nested h-1/2 */}
            <div className="h-1/2 border border-black dark:border-[#666666] flex items-center justify-center">
              <div className="trip">
                <h1>BLATTCLUB</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 hidden md:block border border-black dark:border-[#666666]  py-4 px-4 flex-grow ">
          <ClubList />
        </div>
        <div className="col-span-3 hidden md:block    flex-grow ">
          <div className="flex flex-col h-full gap-2">
            <div className="h-1/2 ">
              {/* <Link href="#">
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
              </Link> */}
              {/* <Image src={advert} alt="advert" className="w-full mt-6" /> */}
              <div className="flex flex-col h-full gap-2">
                {/* First nested h-1/2 */}
                <div className="h-1/2 border border-black dark:border-[#666666] flex items-center justify-center">
                  <p>text</p>
                </div>
                {/* Second nested h-1/2 */}
                <div className="h-1/2 relative border border-black dark:border-[#666666] flex items-center justify-center">
                  <h2 className="text-3xl">
                    <Link
                      className="my-4 underline uppercase"
                      href="/register-farmer"
                    >
                      Become a farmer
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="h-1/2 border relative py-4 px-4   border-black dark:border-[#666666] ">
              {/* Triangle positioned at the bottom-right */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[30px] md:border-t-[50px] lg:border-t-[50px] border-r-[30px] md:border-r-[50px] lg:border-r-[50px] border-t-transparent border-r-[#5d925c]" />
              <p className="p-4">text</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
