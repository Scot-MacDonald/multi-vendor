import FormHeader from "@/app/components/backoffice/FormHeader";
import BannerForm from "@/app/components/backoffice/Forms/BannerForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateBanner({ params: { id } }) {
  const banner = await getData(`banners/${id}`);
  console.log(banner);
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <FormHeader title="UpdateBanner" />
      <BannerForm updateData={banner} />
    </div>
  );
}
