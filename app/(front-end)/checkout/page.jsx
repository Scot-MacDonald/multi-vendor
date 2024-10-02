import CartBanner from "@/app/components/checkout/CartBanner";
import StepForm from "@/app/components/checkout/StepForm";
import Steps from "@/app/components/checkout/Steps";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const steps = [
    {
      number: 1,
      title: "Personal Details",
    },
    {
      number: 2,
      title: "Shipping Details",
    },
    {
      number: 3,
      title: "Payment Method",
    },
    {
      number: 4,
      title: "Order Summary",
    },
  ];
  return (
    <div className="bg-white dark:bg-[#252525] min-h-screen w-full ">
      <div className="max-w-3xl my-6 mx-auto border border-black dark:border-[#666666] p-6 ">
        {/* STEPS */}
        <Steps steps={steps} />
        <div className="w-full  p-4 bg-white border border-gray-200  shadow sm:p-6 md:p-8 dark:bg-[#252525] dark:border-[#666666]">
          {/* Banner */}
          <CartBanner />
          {/* Form */}
          <StepForm />
        </div>
      </div>
    </div>
  );
}
