// import Link from "next/link";
import React from "react";
import TrainingCarousel from "./TrainingCarousel";
import BlogCard from "./BlogCard";
import { getData } from "@/lib/getData";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default async function CommunityTrainings({ trainings, title }) {
  return (
    <section className="my-6">
      <div className="grid grid-cols-12 gap-3  w-full">
        <div className="sm:col-span-6 sm:block bg-white  overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  h-[calc(100vh-10rem)]">
          {/* <div className="grid max-w-md grid-cols-1 mx-auto mt-12 sm:mt-16 md:grid-cols-4 gap-y-12 md:gap-x-8 lg:gap-x-16 md:max-w-none"> */}
          {trainings.map((training, i) => {
            return <BlogCard key={i} training={training} />;
          })}
        </div>
        <div className="sm:col-span-3 sm:block bg-white p-4 overflow-hidden hidden border  border-black dark:border-[#666666] h-[calc(100vh-10rem)]">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
            <div className=" mx-auto md:mx-0">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold dark:text-slate-100 text-gray-900 sm:text-4xl">
                  {title}
                </h2>
                {/* <Link
                  href="/blogs"
                  className="bg-slate-800 py-3 px-5 rounded flex items-center"
                >
                  See All
                  <MoveRight className="flex-shrink-0 mx-2" />
                </Link> */}
              </div>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500 dark:text-gray-200">
                Create custom landing pages with Rareblocks that converts more
                visitors than any website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import React from "react";
// import TrainingCarousel from "./TrainingCarousel";
// import BlogCard from "./BlogCard";
// import { getData } from "@/lib/getData";
// import { MoveRight } from "lucide-react";
// import Link from "next/link";

// export default async function CommunityTrainings({ trainings, title }) {
//   return (
//     <section className="my-6 border  border-black dark:border-[#666666]">
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
//         <div className=" mx-auto md:mx-0">
//           <div className="flex items-center justify-between">
//             <h2 className="text-3xl font-bold dark:text-slate-100 text-gray-900 sm:text-4xl">
//               {title}
//             </h2>
//             {/* <Link
//               href="/blogs"
//               className="bg-slate-800 py-3 px-5 rounded flex items-center"
//             >
//               See All
//               <MoveRight className="flex-shrink-0 mx-2" />
//             </Link> */}
//           </div>
//           <p className="mt-5 text-base font-normal leading-7 text-gray-500 dark:text-gray-200">
//             Create custom landing pages with Rareblocks that converts more
//             visitors than any website.
//           </p>
//         </div>

//         <div className="grid max-w-md grid-cols-1 mx-auto mt-12 sm:mt-16 md:grid-cols-4 gap-y-12 md:gap-x-8 lg:gap-x-16 md:max-w-none">
//           {trainings.map((training, i) => {
//             return <BlogCard key={i} training={training} />;
//           })}
//         </div>
//       </div>

//     </section>
//   );
// }
