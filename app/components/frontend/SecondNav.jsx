import { getData } from "@/lib/getData";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function SecondNav() {
  const categories = await getData("categories");
  return (
    <ul className="nav border border-b-8  border-[#f8f8f8] dark:border-[#303030]">
      {categories.map((category, i) => {
        return (
          <>
            <li>
              <Link
                key={i}
                href="#"
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

