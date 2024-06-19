import React from "react";
import { X } from "lucide-react";
export default function FormHeader({ title }) {
  return (
    <div className="flex items-center justify-between py-6 px-12 text-black dark:text-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <button>
        <X />
      </button>
    </div>
  );
}
