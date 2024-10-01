"use client";
import FormHeader from "@/app/components/backoffice/FormHeader";
import SubmitButton from "@/app/components/FormInputs/SubmitButton";
import TextAreaInput from "@/app/components/FormInputs/TextAreaInput";
import TextInput from "@/app/components/FormInputs/TextInput";
import ImageInput from "@/app/components/FormInputs/ImageInput";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { generateCouponCode } from "@/lib/generateCouponCode";
import ToggleInput from "@/app/components/FormInputs/Toggleinput";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
import { useRouter } from "next/navigation";
import { convertIsoDateToNormal } from "@/lib/convertIsoDatetoNormal";
import { useSession } from "next-auth/react";

export default function CouponForm({ updateData = {} }) {
  const { data: session, status } = useSession();

  const vendorId = session?.user?.id;
  const expiryDateNormal = convertIsoDateToNormal(updateData.expiryDate);
  const id = updateData?.id ?? "";
  updateData.expiryDate = expiryDateNormal;

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
      ...updateData,
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
    data.vendorId = vendorId;
    const couponCode = generateCouponCode(data.title, data.expiryDate); //THIS LINE CAN BE REMOVED IF OTHER LINES ARE UNCOMMENTED
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);
    data.expiryDate = isoFormattedDate;
    data.couponCode = couponCode; //THIS LINE CAN BE REMOVED IF OTHER LINES ARE UNCOMMENTED
    console.log(data);
    if (id) {
      data.id = id;
      makePutRequest(setLoading, `api/coupons/${id}`, data, "Coupon", redirect);
      console.log("update Request:", data);
    } else {
      makePostRequest(
        setLoading,
        "api/coupons",
        data,
        "Coupon",
        reset,
        redirect
      );
    }
  }
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
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
          buttonTitle={id ? "Update Coupon" : "Create Coupon"}
          loadingButtonTitle={`${
            id ? "updating" : "Creating"
          } banner please wait...`}
        />
      </form>
    </div>
  );
}
