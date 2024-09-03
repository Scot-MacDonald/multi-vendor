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
import { useRouter } from "next/navigation";
import NewFarmerForm from "@/app/components/backoffice/NewFarmerForm";

export default function NewFarmer() {
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <FormHeader title="New Farmer" />
      <NewFarmerForm />
    </div>
  );
}
