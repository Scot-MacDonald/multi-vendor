import LoginForm from "@/app/components/frontend/LoginForm";
import { Button } from "flowbite-react";

export default function Login() {
  return (
    <section className=" max-w-[850px] mx-auto  ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  h-[calc(100vh-10rem)] lg:py-0">
        {/* <div className="w-full bg-white  border border-black md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#2b2b2b] dark:border-[#666666]"> */}
        <div className="p-20 space-y-4 md:space-y-6 sm:p-8 bg-white dark:bg-[#2b2b2b]  border border-black dark:border-[#666666]">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white text-center ">
            Login to your account
          </h1>
          <LoginForm />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
