import Link from "next/link";
import React from "react";
import TrainingCarousel from "./TrainingCarousel";
import { getData } from "@/lib/getData";

export default async function CommunityTrainings() {
  const trainings = await getData("trainings");
  return (
    <div className="">
      <div className="flex justify-between items-center py-4 px-2">
        <h2>Community</h2>
        <Link className="" href="#">
          See All
        </Link>
      </div>
      <TrainingCarousel trainings={trainings} />
    </div>
  );
}
