import ForgotPasswordForm from "@/app/components/frontend/ForgotPasswordForm";
// import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <section className="bg-white dark:bg-[#262626] max-width: 850px; mx-auto">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  h-[calc(100vh-10rem)] lg:py-0">
        <div className="w-full bg-white md:mt-0  xl:p-0 dark:bg-[#2b2b2b] border border-black dark:border-[#666666]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Reset Password
            </h1>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </section>
  );
}
