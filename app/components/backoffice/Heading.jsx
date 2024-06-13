import React from "react";

export default function Heading({ title }) {
  return (
    <h2 className="text-2xl font-semibold dark:text-white text-black">
      {title}
    </h2>
  );
}
