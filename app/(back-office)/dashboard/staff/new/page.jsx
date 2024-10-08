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
import { generateCouponCode } from "@/lib/generateCouponCode";
import { generateUserCode } from "@/lib/generateUserCode";
import ToggleInput from "@/app/components/FormInputs/Toggleinput";

export default function NewStaff() {
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState();
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
    const code = generateUserCode("LSM", data.name);
    data.code = code;
    console.log(data);
    makePostRequest(setLoading, "api/staffs", data, "staff", reset);
  }
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <FormHeader title="New Staff" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl ml-8 p-4 bg-white border border-dashed border-gray-900/25 dark:border-[#666666]  sm:p-6 md:p-8 dark:bg-transparent m-5"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Staff Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="NIN (Id Number)"
            name="nin"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Date of Birth"
            name="dob"
            register={register}
            errors={errors}
            type="date"
            className="w-full "
          />
          <TextInput
            label="Password"
            name="password"
            register={register}
            errors={errors}
            type="password"
            className="w-full "
          />

          <TextInput
            label="Staff's Phone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full "
          />
          <TextInput
            label="Staff's Email Address"
            name="name"
            register={register}
            errors={errors}
            className="w-full "
          />
          <TextInput
            label="Staff's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextAreaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Staff"
          loadingButtonTitle="Creating staff please wait..."
        />
      </form>
    </div>
  );
}
