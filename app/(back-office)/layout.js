"use client";
import { useState } from "react";
import Sidebar from "../components/backoffice/Sidebar";
import Navbar from "../components/backoffice/Navbar";

export default function layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex ">
      <Sidebar
        className=""
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <div className="lg:ml-64 ml-0 flex-grow min-h-screen">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className=" mt-16 pr-[8px] text-slate-50 bg-[#f8f8f8] dark:bg-[#303030] min-h-screen ">
          {children}
        </main>
      </div>
    </div>
  );
}
