"use client";
import { useState } from "react";
import Sidebar from "../components/backoffice/Sidebar";
import Navbar from "../components/backoffice/Navbar";

export default function layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex flex-col  mb-40">
      {/* Navbar */}
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Main content area */}
      <div className="flex flex-grow ">
        {/* Sidebar */}
        <Sidebar
          className="h-[calc(100vh-164px)]" // Adjust the height to be full minus the navbar height
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        {/* Main content */}
        <main className="flex-grow w-full h-[calc(100vh-164px)] text-slate-50 bg-[#f8f8f8] dark:bg-[#303030]">
          {children}
        </main>
      </div>
    </div>
  );
}
