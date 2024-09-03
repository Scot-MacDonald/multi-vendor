import FormHeader from "@/app/components/backoffice/FormHeader";
import CouponForm from "@/app/components/backoffice/Forms/CouponForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateCoupon({ params: { id } }) {
  const coupon = await getData(`coupons/${id}`);

  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <FormHeader title="Update Coupon" />
      <CouponForm updateData={coupon} />
    </div>
  );
}
