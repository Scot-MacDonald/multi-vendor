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
      <section className="py-0 bg-white  pt-6  dark:bg-[#252525] w-full ">
        {/* <div className="px-4 mx-auto sm:px-6 lg:px-0 w-full"> */}
        <div className="grid lg:grid-cols-12 lg:gap-x-2 w-full  h-[calc(100vh-10rem)]">
          <div className=" lg:col-span-6  overflow-y-scroll border  border-black dark:border-[#666666]">
            <div className="px-4 py-4 ">
              <div className=" mx-auto">
                <div className="flex justify-between align-middle">
                  <h1 className="font-bold text-[16px] uppercase">
                    {training.title}
                  </h1>
                  <p className="font-bold text-[16px] uppercase">
                    {normalDate}
                  </p>
                </div>

                <div className="mt-12 sm:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
                  <img
                    className="object-cover w-full h-full"
                    src={training.imageUrl}
                    alt={training.title}
                  />
                </div>

                <div className="py-8">
                  <p className="text-lg  ">{training.description}</p>

                  <hr className="mt-6 border-black dark:border-[#666666]" />
                  <div className="py-8">
                    <TrainingHtml content={training.content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RecentTrainings recentTrainings={recentTrainings} />{" "}
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
        </div>
        {/* </div> */}
        <div className="py-8 ">
          <CategoryList isMarketPage={false} category={category} />
        </div>
      </section>
    </>
  );
}
