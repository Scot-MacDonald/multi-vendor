import React from "react";

export default function Heading({ title }) {
  return (
    <h2 className="font-bold text-[16px] uppercase dark:text-white text-black">
      {title}
    </h2>
  );
}
