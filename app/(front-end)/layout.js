import React from "react";
import Navbar from "../components/frontend/Navbar";
import Footer from "../components/frontend/Footer";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex py-3   bg-white dark:bg-[#252525]">{children}</div>
      <Footer />
    </div>
  );
}
