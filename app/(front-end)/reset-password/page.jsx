// import ForgotPasswordForm from "@/components/ForgotPasswordForm";
// import RegisterForm from "@/components/RegisterForm";

import ResetPasswordForm from "@/app/components/frontend/ResetPasswordForm";

export default function PasswordReset() {
  return (
    <section className="bg-gray-50 dark:bg-[#262626] w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 border border-black dark:border-[#666666]">
        <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#262626] ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Reset Passwordss
            </h1>
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </section>
  );
}
