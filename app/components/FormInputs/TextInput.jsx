export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      {/* <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-[#303030] dark:text-slate-50 mb-2 "
      >
        {label}
      </label> */}
      <div className="">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="text-2xl font-light tracking-[0.11px] text-black dark:text-white p-4 border-1 border-black dark:border-[#666666] bg-transparent appearance-none text-center w-full placeholder:text-center placeholder-black dark:placeholder-[#cccccc]"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
