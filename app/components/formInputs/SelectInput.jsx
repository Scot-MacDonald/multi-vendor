import React from "react";

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-[#303030] dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          multiple={multiple}
          name={name}
          className="block w-full bg-white dark:bg-transparent rounded-md border-0 py-2 text-[#c1c1c1] dark:text-white shadow-sm ring-1 ring-inset dark:ring-[#666666] ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#666666]  sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
