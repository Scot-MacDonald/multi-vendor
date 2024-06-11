import React from "react";
import Sidebar from "../components/backoffice/Sidebar";
import Navbar from "../components/backoffice/Navbar";

export default function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full">
        <Navbar />
        <main className="ml-60 mt-16  p-8 text-slate-50 min-h-screen ">
          {children}
        </main>
      </div>
    </div>
  );
}
