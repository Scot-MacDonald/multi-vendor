import React from "react";
import Sidebar from "../components/backoffice/Sidebar";
import Navbar from "../components/backoffice/Navbar";

export default function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="lg:ml-64 ml-0 flex-grow min-h-screen">
        <Navbar />
        <main className=" mt-16  p-8 text-slate-50 bg-white dark:bg-black min-h-screen ">
          {children}
        </main>
      </div>
    </div>
  );
}
