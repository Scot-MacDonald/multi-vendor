"use client";
import FormHeader from "@/app/components/backoffice/FormHeader";
import SubmitButton from "@/app/components/formInputs/SubmitButton";
import TextAreaInput from "@/app/components/formInputs/TextAreaInput";
import TextInput from "@/app/components/formInputs/TextInput";
import ImageInput from "@/app/components/formInputs/imageInput";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "@/app/components/formInputs/SelectInput";
import ToggleInput from "@/app/components/formInputs/Toggleinput";
import { useRouter } from "next/navigation";

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  // const markets = [];
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/categories");
  }

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;

    console.log(data);
    makePostRequest(
      setLoading,
      "api/categories",
      data,
      "category",
      reset,
      redirect
    );
    setImageUrl("");
  }
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <FormHeader title="New category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl ml-8 p-4 bg-white border border-dashed border-gray-900/25 dark:border-[#666666] sm:p-6 md:p-8 dark:bg-transparent   m-5"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />

          <TextAreaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
            label="Category image"
          />
          <ToggleInput
            label="Publish your Category"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Category"
          loadingButtonTitle="Creating category please wait..."
        />
      </form>
    </div>
  );
}
