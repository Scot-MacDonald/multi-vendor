import Link from "next/link";
import React from "react";
import TrainingCarousel from "./TrainingCarousel";

export default function CommunityTrainings() {
  return (
    <div className="">
      <div className="flex justify-between items-center py-4 px-2">
        <h2>Community</h2>
        <Link className="" href="#">
          See All
        </Link>
      </div>
      <TrainingCarousel />
    </div>
  );
}
