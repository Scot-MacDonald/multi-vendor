import CommunityTrainings from "@/app/components/frontend/CommunityTrainings";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page() {
  const trainings = await getData("trainings");
  return (
    <div className="">
      <CommunityTrainings title="All Our Trainings" trainings={trainings} />
    </div>
  );
}
