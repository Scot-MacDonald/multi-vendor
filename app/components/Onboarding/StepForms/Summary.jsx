"use client";

import { makePostRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";
import { setCurrentStep } from "@/redux/slices/onboardingSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function Summary({ farmerId }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onboardingFormData = useSelector(
    (store) => store.onboarding.onboardingFormData
  );
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const dispatch = useDispatch();

  const reset = () => {
    console.log("Form reset triggered");
    // Logic to reset the form or state
  };

  const redirect = () => {
    console.log("Redirecting...");
    router.push("http://localhost:3000/login");
  };

  async function submitData() {
    const data = { ...onboardingFormData };
    const fullName = `${data.firstName} ${data.lastName}`;
    const code = generateUserCode("LFF", fullName);
    data.code = code;
    data.userId = farmerId;

    console.log("Submitting data:", data);

    // Ensure reset and redirect functions are handled properly
    makePostRequest(setLoading, "api/farmers", data, "farmer", reset, redirect);
  }

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">Summary</h2>
      <div className="flex">
        <h2>Here are your Details</h2>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => dispatch(setCurrentStep(currentStep - 1))}
          className="inline-flex items-center px-6 py-3 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>
        {loading ? (
          <button
            disabled
            className="px-6 py-3 text-sm font-medium bg-slate-900 text-white rounded-lg"
          >
            Processing, please wait...
          </button>
        ) : (
          <button
            onClick={submitData}
            className="inline-flex items-center px-6 py-3 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800"
          >
            Submit Data
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
}
