import { getData } from "@/lib/getData";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function SidebarCategories() {
  const categories = await getData("categories");
  return (
    <div className="md:col-span-3 hidden md:block border border-dashed border-gray-900/25 dark:border-[#666666] rounded-md overflow-hidden">
      <h2 className=" py-4 px-6">Shop by category ({categories.length})</h2>

      <div className="py-4 px-6  overflow-y-auto flex flex-col gap-4">
        {categories.map((category, i) => {
          return (
            <>
              <Link
                key={i}
                href="#"
                className="flex items-center gap-3 hover:bg-[#f8f8f8] duration-500 transition-all"
              >
                <Image
                  width={558}
                  height={558}
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-10 h-10 object-cover"
                />
                <span>{category.title}</span>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
