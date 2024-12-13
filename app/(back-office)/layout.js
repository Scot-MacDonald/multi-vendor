"use client";
import { useState } from "react";
import Sidebar from "../components/backoffice/Sidebar";
import Navbar from "../components/backoffice/Navbar";

export default function layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="  flex flex-col w-full ">
      {/* Navbar */}
      <div className=" m-6 flex flex-col">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </div>
      <div className="grid grid-cols-12 gap-2 mx-6 pt-6  ">
        <Sidebar
          className="h-[calc(100vh-164px)]" // Adjust the height to be full minus the navbar height
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div className="col-span-10 hidden md:block border border-black dark:border-[#666666]  py-4 px-4">
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
}
