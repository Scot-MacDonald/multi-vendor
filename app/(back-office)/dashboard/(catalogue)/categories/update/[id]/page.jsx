import FormHeader from "@/app/components/backoffice/FormHeader";
import NewCategoryForm from "@/app/components/backoffice/Forms/NewCategoryForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateCategory({ params: { id } }) {
  const category = await getData(`categories/${id}`);
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <FormHeader title="Update Category" />
      <NewCategoryForm updateData={category} />
    </div>
  );
}
