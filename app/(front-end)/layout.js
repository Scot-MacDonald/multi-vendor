import React from "react";
import Navbar from "../components/frontend/Navbar";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex py-3  mx-auto px-8 bg-white dark:bg-[#252525]">
        {children}
      </div>
    </div>
  );
}
