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
import SelectInput from "@/app/components/FormInputs/SelectInput";
import ToggleInput from "@/app/components/FormInputs/Toggleinput";
// import QuillEditor from "@/app/components/formInputs/QuillEditor";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const QuillEditor = dynamic(
  () => import("@/app/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);
export default function NewTrainingForm({ categories }) {
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

  const [content, setContent] = useState("");

  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/community");
  }

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/trainings",
      data,
      "Training",
      reset,
      redirect
    );
    setImageUrl("");
    setContent("");
  }
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl ml-8 p-4 bg-white border border-[#f8f8f8]  sm:p-6 md:p-8 dark:bg-transparent dark:border-[#303030]  m-5"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full bg-transparent"
            options={categories}
            // change to false for single select
          />
          <TextAreaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
            label="Training Thumbnail"
          />
          <div className="sm:col-span-2">
            <label
              htmlFor="content"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Content
            </label>
            <QuillEditor
              label="Training Content"
              value={content}
              onChange={setContent}
            />
          </div>
          <ToggleInput
            label="Publish your Training"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Training"
          loadingButtonTitle="Creating training please wait..."
        />
      </form>
    </div>
  );
}
