import FormHeader from "@/app/components/backoffice/FormHeader";
import NewTrainingForm from "@/app/components/backoffice/Forms/NewTrainingForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateTraining({ params: { id } }) {
  const training = await getData(`trainings/${id}`);
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <FormHeader title="Update Training" />
      <NewTrainingForm categories={categories} updateData={training} />;
    </div>
  );
}
