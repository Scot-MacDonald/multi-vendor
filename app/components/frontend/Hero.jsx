"use client";
import { Cannabis } from "lucide-react";
import React from "react";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  const categories = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="flex gap-8">
      <div className="w-1/3 border border-dashed border-gray-900/25 dark:border-[#666666] rounded-md overflow-hidden">
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
      <div className="w-2/3  ">
        <HeroCarousel />
      </div>
    </div>
  );
}
