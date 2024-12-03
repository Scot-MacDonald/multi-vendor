import { convertIsoDateToNormal } from "@/lib/convertIsoDatetoNormal";
import Link from "next/link";
import React from "react";

export default function RecentTrainings({ recentTrainings }) {
  return (
    <div className="col-span-full md:col-span-3  ">
      <div className="flex flex-col h-full gap-2">
        {/* First nested h-1/2 */}
        {/* <div className="h-1/2 border border-black dark:border-[#666666] flex items-center justify-center overflow-hidden flex-grow p-2 "> */}
        {/* <HeroCarousel banners={banners} /> */}
        <div className="mt-6 space-y-5 ">
          {recentTrainings.map((training, i) => {
            const normalDate = convertIsoDateToNormal(training.createdAt);
            return (
              <div
                key={i}
                className=" h-1/2 relative overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1"
              >
                <div className="p-4">
                  <div className="flex items-start flex-col lg:items-center">
                    <img
                      className="object-cover w-full h-16 rounded-lg shrink-0"
                      src={training.imageUrl}
                      alt={training.title}
                    />
                    <div className="ml-5">
                      {/* <p className="text-sm font-medium text-gray-900">
                      {normalDate}
                    </p> */}
                      <p className="text-sm leading-7 font-bold text-gray-900 mt-2.5">
                        <Link
                          href={`/blogs/${training.slug}`}
                          className="line-clamp-2"
                        >
                          {training.title}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Second nested h-1/2 */}
    </div>

    // <div className="lg:col-span-3">
    //   <p className="text-xl font-bold text-gray-900 dark:text-slate-300">
    //     Related Trainings
    //   </p>

    //   <div className="mt-6 space-y-5">
    //     {recentTrainings.map((training, i) => {
    //       const normalDate = convertIsoDateToNormal(training.createdAt);
    //       return (
    //         <div
    //           key={i}
    //           className="relative overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1"
    //         >
    //           <div className="p-4">
    //             <div className="flex items-start flex-col lg:items-center">
    //               <img
    //                 className="object-cover w-full h-16 rounded-lg shrink-0"
    //                 src={training.imageUrl}
    //                 alt={training.title}
    //               />
    //               <div className="ml-5">
    //                 {/* <p className="text-sm font-medium text-gray-900">
    //                   {normalDate}
    //                 </p> */}
    //                 <p className="text-sm leading-7 font-bold text-gray-900 mt-2.5">
    //                   <Link
    //                     href={`/blogs/${training.slug}`}
    //                     className="line-clamp-2"
    //                   >
    //                     {training.title}
    //                     <span
    //                       className="absolute inset-0"
    //                       aria-hidden="true"
    //                     ></span>
    //                   </Link>
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}
