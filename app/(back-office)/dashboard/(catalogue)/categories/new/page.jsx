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

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  const markets = [
    {
      id: 1,
      title: "White Widow farmers market",
    },
    {
      id: 2,
      title: "Quebec Gold farmers market",
    },
    {
      id: 3,
      title: "Shaman farmers market",
    },
    {
      id: 4,
      title: "Cannabis sativa farmers market",
    },
  ];
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

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;

    console.log(data);
    makePostRequest(setLoading, "api/categories", data, "category", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="New category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4  border border-gray-300 rounded-lg shadow sm:p-6 md:p-8 dark:bg-transparent dark:border-[#666666] mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Markets"
            name="marketIds"
            register={register}
            errors={errors}
            className="w-full bg-transparent"
            options={markets}
            // change to false for single select
            multiple={true}
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
