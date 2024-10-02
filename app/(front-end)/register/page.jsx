import RegisterForm from "@/app/components/frontend/RegisterForm";

export default function Register() {
  return (
    <section className="bg-white dark:bg-[#252525] w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg border border-black dark:border-[#666666] md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#303030] ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Create a new account
            </h1>
            <RegisterForm role="USER" />
          </div>
        </div>
      </div>
    </section>
  );
}
