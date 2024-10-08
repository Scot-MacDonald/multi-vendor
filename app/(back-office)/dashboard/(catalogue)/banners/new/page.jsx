import FormHeader from "@/app/components/backoffice/FormHeader";
import BannerForm from "@/app/components/backoffice/Forms/BannerForm";

export default function NewBanner() {
  return (
    <div className="bg-white dark:bg-[#252525] py-6">
      <FormHeader title="UpdateBanner" />
      <BannerForm />
    </div>
  );
}
