"use client";
import FormHeader from "@/app/components/backoffice/FormHeader";
import SubmitButton from "@/app/components/FormInputs/SubmitButton";
import TextAreaInput from "@/app/components/FormInputs/TextAreaInput";
import TextInput from "@/app/components/FormInputs/TextInput";
import ImageInput from "@/app/components/FormInputs/ImageInput";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToggleInput from "@/app/components/FormInputs/Toggleinput";
import SelectInput from "@/app/components/FormInputs/SelectInput";
import { useRouter } from "next/navigation";

export default function NewMarketForm({ categories }) {
  const [imageUrl, setImageUrl] = useState("");
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
    router.push("/dashboard/markets");
  }
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = imageUrl;

    console.log(data);
    makePostRequest(setLoading, "api/markets", data, "Market", reset, redirect);
    setImageUrl("");
  }
  return (
    <div className="bg-white dark:bg-[#252525] ">
      <FormHeader title="New Market" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl ml-8 p-4 bg-white border border-dashed border-gray-900/25 dark:border-[#666666]  sm:p-6 md:p-8 dark:bg-transparent m-5"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Categories"
            name="categoryIds"
            register={register}
            errors={errors}
            className="w-full bg-transparent"
            options={categories}
            // change to false for single select
            multiple={true}
          />

          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="marketLogoUploader"
            label="Market Logo"
          />
          <TextAreaInput
            label={"Market Description"}
            name={"description"}
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Farmer status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Market"
          loadingButtonTitle="Creating market please wait..."
        />
      </form>
    </div>
  );
}
