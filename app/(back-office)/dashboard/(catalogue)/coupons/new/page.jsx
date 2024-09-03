import FormHeader from "@/app/components/backoffice/FormHeader";
import CouponForm from "@/app/components/backoffice/Forms/CouponForm";

export default function NewCoupon() {
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <FormHeader title="New Coupon" />
      <CouponForm />
    </div>
  );
}
