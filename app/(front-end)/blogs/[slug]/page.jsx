// import TrainingHtml from "@/components/TrainingHtml";
import TrainingHtml from "@/app/components/TrainingHtml";
import CategoryList from "@/app/components/frontend/CategoryList";
import RecentTrainings from "@/app/components/frontend/RecentTrainings";
import { convertIsoDateToNormal } from "@/lib/convertIsoDatetoNormal";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({ params: { slug } }) {
  const training = await getData(`trainings/training/${slug}`);
  const trainingId = training.id;
  const normalDate = convertIsoDateToNormal(training.createdAt);
  const allTrainings = await getData("trainings");
  const recentTrainings = allTrainings.filter(
    (training) => training.id !== trainingId
  );
  const category = await getData(`categories/${training.categoryId}`);
  return (
    <>
      <section className="py-0 bg-white  pt-6  rounded-md dark:bg-slate-700 w-full ">
        {/* <div className="px-4 mx-auto sm:px-6 lg:px-0 w-full"> */}
        <div className="grid   lg:grid-cols-12 lg:gap-x-2 w-full  h-[calc(100vh-10rem)]">
          <div className="col-span-full md:col-span-3  ">
            <div className="flex flex-col h-full gap-2">
              {/* First nested h-1/2 */}
              <div className="h-1/2 border border-black dark:border-[#666666] flex items-center justify-center overflow-hidden flex-grow p-2 ">
                {/* <HeroCarousel banners={banners} /> */}
                <div className="bg-gray-100 w-full h-full"></div>
              </div>
              {/* Second nested h-1/2 */}
              <div className="h-1/2 border border-black dark:border-[#666666] flex items-center justify-center">
                <div className="trip"></div>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-6  border overflow-y-scroll border-black">
            <div className="px-4 py-5 sm:p-6 ">
              <div className=" mx-auto">
                <div className=" mx-auto">
                  <p className="text-base font-medium text-gray-500">
                    {normalDate}
                  </p>
                  <h1 className="mt-6 text-4xl font-bold text-gray-900 ">
                    {training.title}
                  </h1>
                </div>

                <div className="mt-12 sm:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
                  <img
                    className="object-cover w-full h-full"
                    src={training.imageUrl}
                    alt={training.title}
                  />
                </div>

                <div className="py-8 text-gray-900 ">
                  <p className="text-lg  ">{training.description}</p>

                  <hr className="mt-6" />
                  <div className="py-8">
                    <TrainingHtml content={training.content} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <RecentTrainings recentTrainings={recentTrainings} />
        </div>
        {/* </div> */}
        <div className="py-8 ">
          <CategoryList isMarketPage={false} category={category} />
        </div>
      </section>
    </>
  );
}
