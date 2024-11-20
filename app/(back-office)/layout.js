"use client";
import { useState } from "react";
import Sidebar from "../components/backoffice/Sidebar";
import Navbar from "../components/backoffice/Navbar";

export default function layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="  flex flex-col  ">
      {/* Navbar */}
      <div className=" m-6 flex flex-col  ">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
      {/* Main content area */}
      <div className="flex flex-grow mt-2 mx-6">
        {/* Sidebar */}
        <Sidebar
          className="h-[calc(100vh-164px)]" // Adjust the height to be full minus the navbar height
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        {/* Main content */}
        <main className="ml-0 lg:ml-2 p-2 flex-grow w-full h-[calc(100vh-165px)] text-black dark:text-white bg-[#ffffff] dark:bg-[#303030] border border-[#000000] dark:border-[#303030]">
          {children}
        </main>
      </div>
    </div>
  );
}
