import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
export default function FormHeader({ title }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-6 px-8 text-black dark:text-white">
      <h2 className="text-xs-bold">{title}</h2>
      <button onClick={() => router.back()}>
        <X />
      </button>
    </div>
  );
}
