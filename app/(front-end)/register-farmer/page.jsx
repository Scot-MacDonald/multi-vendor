import React from "react";
import RegisterForm from "@/app/components/frontend/RegisterForm";

export default function page() {
  return (
    <section className="bg-white dark:bg-[#262626] max-width: 850px; mx-auto">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  h-[calc(100vh-10rem)] lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Register Farmer
        </a>
        <div className="w-full bg-white md:mt-0  xl:p-0 dark:bg-[#2b2b2b] border border-black dark:border-[#666666]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Create a new account
            </h1>
            <RegisterForm role="FARMER" />
          </div>
        </div>
      </div>
    </section>
  );
}
