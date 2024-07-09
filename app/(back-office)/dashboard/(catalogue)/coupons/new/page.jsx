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
import { generateCouponCode } from "@/lib/generateCouponCode";
import ToggleInput from "@/app/components/formInputs/Toggleinput";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
import { useRouter } from "next/navigation";

export default function NewCoupon() {
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
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/coupons");
  }

  // HE REMOVED THE FOLLOWING 4 LINES OF CODE BECAUSE HE HAD AN ERROR OURS RUNS WITHOUT AN ERROR!
  // const title = watch("title");
  // const expiryDate = watch("expiryDate");
  // const coupon = generateCouponCode(title, expiryDate)
  // console.log(coupon);
  async function onSubmit(data) {
    const couponCode = generateCouponCode(data.title, data.expiryDate); //THIS LINE CAN BE REMOVED IF OTHER LINES ARE UNCOMMENTED
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);
    data.expiryDate = isoFormattedDate;
    data.couponCode = couponCode; //THIS LINE CAN BE REMOVED IF OTHER LINES ARE UNCOMMENTED
    console.log(data);
    makePostRequest(setLoading, "api/coupons", data, "coupon", reset, redirect);
  }
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <FormHeader title="New coupon" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl ml-8 p-4 bg-white border border-dashed border-gray-900/25 dark:border-[#666666]  sm:p-6 md:p-8 dark:bg-transparent m-5"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
          />
          {/* THE LINE BELOW CAN BE UNCOMMENTED AND THE USER CAN INPUT THE COUPON CODE */}
          {/* <TextInput
            label="Coupon Code"
            name="code"
            defaultValue="gfgfgfgfgf"
            register={register}
            errors={errors}
            className="w-full"
          /> */}
          <TextInput
            label="Coupon expiry date"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
          <ToggleInput
            label="Publish your Coupon"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Coupon"
          loadingButtonTitle="Creating coupon please wait..."
        />
      </form>
    </div>
  );
}
