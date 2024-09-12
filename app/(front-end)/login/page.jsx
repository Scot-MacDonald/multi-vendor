import LoginForm from "@/app/components/frontend/LoginForm";
import { Button } from "flowbite-react";

export default function Login() {
  return (
    <section className="bg-gray-50 dark:bg-[#252525] w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#2b2b2b] dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Login to your account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
