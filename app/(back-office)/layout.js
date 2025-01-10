"use client";
import { useEffect, useState } from "react";
import Sidebar from "../components/backoffice/Sidebar";
import Navbar from "../components/backoffice/Navbar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
// import { ScrollArea } from "@/components/ui/scroll-area";

// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/backoffice/app-sidebar";
const HEADER_HEIGHT = "5.6rem";
export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="h-screen w-full flex flex-col bg-white dark:bg-[#252525]">
        {/* Header */}
        <header
          className="flex h-[--header-height] fixed top-0 left-0 right-0 z-10 items-center gap-2 bg-white dark:bg-[#252525] px-6"
          style={{
            "--header-height": HEADER_HEIGHT,
          }}
        >
          <Navbar>
            <SidebarTrigger className="" />
          </Navbar>
        </header>

        {/* Main Content */}
        <div
          className="flex flex-1  pt-[--header-height]"
          style={{
            paddingTop: HEADER_HEIGHT,
          }}
        >
          {/* Sidebar */}
          <AppSidebar className="" />

          {/* Main Content Area */}
          <main className="flex-1  mt-0 ml-10 mb-10 mr-6 border border-black dark:border-[#666666] overflow-auto bg-white  dark:bg-[#303030] text-black dark:text-white">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
