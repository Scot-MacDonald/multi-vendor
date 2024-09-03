import FormHeader from "@/app/components/backoffice/FormHeader";
import NewTrainingForm from "@/app/components/backoffice/NewTrainingForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewTraining() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => ({
    id: category.id,
    title: category.title,
  }));
  return (
    <div>
      <FormHeader title="New Training" />
      <NewTrainingForm categories={categories} />;
    </div>
  );
}
