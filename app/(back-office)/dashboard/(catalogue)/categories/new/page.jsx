import FormHeader from "@/app/components/backoffice/FormHeader";
import NewCategoryForm from "@/app/components/backoffice/Forms/NewCategoryForm";

export default function NewCategory() {
  return (
    <div className="bg-white dark:bg-[#252525]">
      <FormHeader title="New category" />
      <NewCategoryForm />
    </div>
  );
}

// "use client";
// import FormHeader from "@/app/components/backoffice/FormHeader";
// import SubmitButton from "@/app/components/formInputs/SubmitButton";
// import TextAreaInput from "@/app/components/formInputs/TextAreaInput";
// import TextInput from "@/app/components/formInputs/TextInput";
// import ImageInput from "@/app/components/formInputs/imageInput";
// import { generateSlug } from "@/lib/generateSlug";
// import { makePostRequest } from "@/lib/apiRequest";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import SelectInput from "@/app/components/formInputs/SelectInput";
// import ToggleInput from "@/app/components/formInputs/Toggleinput";
// import { useRouter } from "next/navigation";

// const [imageUrl, setImageUrl] = useState("");
// // const markets = [];
// const [loading, setLoading] = useState(false);
// const {
//   register,
//   reset,
//   watch,
//   handleSubmit,
//   formState: { errors },
// } = useForm({
//   defaultValues: {
//     isActive: true,
//   },
// });
// const isActive = watch("isActive");
// const router = useRouter();
// function redirect() {
//   router.push("/dashboard/categories");
// }

// async function onSubmit(data) {
//   const slug = generateSlug(data.title);
//   data.slug = slug;
//   data.imageUrl = imageUrl;

//   console.log(data);
//   makePostRequest(
//     setLoading,
//     "api/categories",
//     data,
//     "category",
//     reset,
//     redirect
//   );
//   setImageUrl("");
// }
