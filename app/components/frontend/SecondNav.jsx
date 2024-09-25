import { getData } from "@/lib/getData";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function SecondNav() {
  const categories = await getData("categories");
  return (
    <ul className="nav  border-b  border-[#000000] dark:border-[#666666]">
      {categories.map((category, i) => {
        return (
          <>
            <li>
              <Link
                key={i}
                href="#"
                className="dark:text-white "
                //   className="flex items-center gap-3 hover:bg-[#f8f8f8] duration-500 transition-all pr-10"
              >
                {category.title}
              </Link>
            </li>
          </>
        );
      })}
    </ul>
  );
}
// <>
//   <ul className="nav">
//     <li>
//       <a href="#" class="active">
//         Home
//       </a>
//     </li>
//     <li>
//       <a href="#">Blog</a>
//     </li>
//     <li>
//       <a href="#">Products</a>
//     </li>
//     <li>
//       <a href="#">Services</a>
//     </li>
//     <li>
//       <a href="#">Help</a>
//     </li>
//     <li>
//       <a href="#">Contact</a>
//     </li>
//   </ul>
// </>
//   );
// }
