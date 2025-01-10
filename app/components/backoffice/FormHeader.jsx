"use client";
import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
export default function FormHeader({ title }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 text-black dark:text-white">
      <h2 className="font-bold text-[16px] uppercase">{title}</h2>
      <button onClick={() => router.back()}>
        <X />
      </button>
    </div>
  );
}
