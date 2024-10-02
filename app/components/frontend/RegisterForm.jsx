"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";

export default function RegisterForm({ role = "USER" }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  async function onSubmit(data) {
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        // const userRole= responseData.data.role

        if (role === "USER") {
          router.push("/");
        } else {
          router.push("/verify-email");
        }
      } else {
        setLoading(false);

        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <TextInput
        label=""
        name="role"
        register={register}
        errors={errors}
        type="hidden"
        defaultValue={role}
        className="sm:col-span-2 mb-3 border-white"
      />
      <TextInput
        label="Your Full Name"
        name="name"
        register={register}
        errors={errors}
        type="text"
        className="sm:col-span-2 mb-3"
      />
      <TextInput
        label="Email"
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="sm:col-span-2 mb-3"
      />
      {emailErr && (
        <small className="text-red-600 -mt-2 mb-2">{emailErr}</small>
      )}
      <TextInput
        label="Password"
        name="password"
        register={register}
        errors={errors}
        type="password"
        className="sm:col-span-2 mb-3"
      />
      <SubmitButton
        isLoading={loading}
        buttonTitle="Register"
        loadingButtonTitle="Creating please wait..."
      />

      <p className="text-sm font-light text-gray-500 dark:text-gray-400 pt-3 flex items-center gap-2">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-green-600 hover:underline dark:text-green-600"
        >
          Login
        </Link>
      </p>
      {role === "USER" ? (
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 pt-3 flex items-center gap-2">
          Are you a Farmer?{" "}
          <Link
            href="/register-farmer"
            className="font-medium text-green-600 hover:underline dark:green-purple-600"
          >
            Register here
          </Link>
        </p>
      ) : (
        <p className="text-[0.75rem] font-light text-gray-500 dark:text-gray-400 py-4">
          Are you a User ?{" "}
          <Link
            href="/register"
            className="font-medium text-purple-600 hover:underline dark:text-purple-500"
          >
            Register here
          </Link>
        </p>
      )}
    </form>
  );
}
