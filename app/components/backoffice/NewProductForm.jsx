"use client";
import FormHeader from "@/app/components/backoffice/FormHeader";
import SubmitButton from "@/app/components/FormInputs/SubmitButton";
import TextAreaInput from "@/app/components/FormInputs/TextAreaInput";
import TextInput from "@/app/components/FormInputs/TextInput";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInput from "@/app/components/FormInputs/SelectInput";

import ToggleInput from "@/app/components/FormInputs/Toggleinput";
import clsx from "clsx";
import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";
import ArrayItemsInput from "@/app/components/FormInputs/ArrayItemsInput";
import MultipleImageInput from "../FormInputs/MultipleImageInput";

export default function NewProductForm({
  categories,
  farmers,
  updateData = {},
}) {
  console.log(updateData);
  const initialImageUrl = updateData?.imageUrl ?? "";
  const initialTags = updateData?.tags ?? [];
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  // TAGS
  const [tags, setTags] = useState(initialTags);
  console.log(tags);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      isWholesale: false,
      ...updateData,
    },
  });
  const isActive = watch("isActive");
  const isWholesale = watch("isWholesale");
  console.log(isActive);
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/products");
  }
  const [productImages, setProductImages] = useState([]);
  console.log(productImages);
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("LLP", data.title);
    data.slug = slug;
    data.productImages = productImages;
    data.tags = tags;
    data.qty = 1;
    data.productCode = productCode;
    console.log(data);
    if (id) {
      data.id = id;
      // Make Put Request (Update)
      makePutRequest(
        setLoading,
        `api/products/${id}`,
        data,
        "Product",
        redirect
      );
      console.log("update Request: ", data);
    } else {
      makePostRequest(
        setLoading,
        "api/products",
        data,
        "Product",
        reset,
        redirect
      );
      setProductImages([]);
      setTags([]);
    }
  }

  return (
    <div className="bg-white dark:bg-[#252525]">
      {/* <FormHeader title="New product" /> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl ml-8 p-4 bg-white border border-dashed border-gray-900/25 dark:border-[#666666] sm:p-6 md:p-8 dark:bg-transparent m-5"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale Price"
            name="salePrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Stock"
            name="productStock"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Unit of Measurement"
            name="unit"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <SelectInput
            label="Select Farmer"
            name="userId"
            register={register}
            errors={errors}
            className="w-full"
            options={farmers}
          />
          <ToggleInput
            label="Supports Wholesale Selling"
            name="isWholesale"
            trueTitle="Supported"
            falseTitle="Not Supported"
            register={register}
          />
          {isWholesale && (
            <>
              <TextInput
                label="Wholesale Price"
                name="wholesalePrice"
                type="number"
                register={register}
                errors={errors}
                className="w-full"
              />
              <TextInput
                label="Minimum Wholesale Qty"
                name="wholesaleQty"
                type="number"
                register={register}
                errors={errors}
                className="w-full"
              />
            </>
          )}
          <MultipleImageInput
            imageUrls={productImages}
            setImageUrls={setProductImages}
            endpoint="multipleProductsUploader"
            label="Product images"
          />
          <TextAreaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Publish your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
          <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Tag" />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Creating product please wait..."
        />
      </form>
    </div>
  );
}
