// Front Page

import React from "react";
import TrainingCarousel from "./TrainingCarousel";
import BlogCard from "./BlogCard";
import { getData } from "@/lib/getData";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default async function CommunityTrainingsFP({ trainings, title }) {
  return (
    <section className="">
      <div className=" mx-auto   ">
        <div className=" mx-auto md:mx-0">
          <div className="flex items-center justify-between">
            <h2 className="py-2 text-3xl font-bold dark:text-slate-100 text-gray-900 sm:text-4xl">
              {title}
            </h2>
            <Link href="/blogs" className=" py-3 px-5  flex items-center">
              See All
              <MoveRight className="flex-shrink-0 mx-2" />
            </Link>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-0  md:grid-cols-4 gap-y-12 md:gap-x-2 lg:gap-x-2 md:max-w-none">
          {trainings.map((training, i) => {
            return <BlogCard key={i} training={training} />;
          })}
        </div>
      </div>
    </section>
  );
}
