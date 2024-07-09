"use client";
import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";

export default function Navbar({ setShowSidebar, showSidebar }) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-[#252525] text-white dark:text-[#249a38] h-16 px-8 py-4 fixed top-0 w-full  lg:pr-[20rem] z-50 border-t-8 border-b-8 border-r-8  border-[#f8f8f8] dark:border-[#303030]">
      {/* <Link href={"/dashboard"} className="sm:hidden text-black">
        Logo
      </Link> */}
      <button onClick={() => setShowSidebar(!showSidebar)}>
        <AlignJustify className="text-[#12a049] dark:text-white" />
      </button>

      <div className="flex space-x-3 ">
        <ThemeSwitcherBtn />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg"
            >
              <Bell className="text-[#12a049] dark:text-white" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-2">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex items-center">
                <Image
                  src="/thumbnail_Wanda(1).jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col space-y-1">
                  <p>purple sticky bud out,...</p>
                  <div className="flex items-center space-x-2">
                    <p className="bg-red-500 text-white text-sm px-3 py-0.5 rounded-full">
                      Stock out
                    </p>
                    <p>Dec 02 2024 - 16:16pm</p>
                  </div>
                </div>
                <button>
                  <X className="ml-2" />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center">
                <Image
                  src="/thumbnail_Wanda(1).jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col space-y-1">
                  <p>purple sticky bud out,...</p>
                  <div className="flex items-center space-x-2">
                    <p className="bg-red-500 text-white text-sm px-3 py-0.5 rounded-full">
                      Stock out
                    </p>
                    <p>Dec 02 2024 - 16:16pm</p>
                  </div>
                </div>
                <button>
                  <X className="ml-2" />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center">
                <Image
                  src="/thumbnail_Wanda(1).jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col space-y-1">
                  <p>purple sticky bud out,...</p>
                  <div className="flex items-center space-x-2">
                    <p className="bg-red-500 text-white text-sm px-3 py-0.5 rounded-full">
                      Stock out
                    </p>
                    <p>Dec 02 2024 - 16:16pm</p>
                  </div>
                </div>
                <button>
                  <X className="ml-2" />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center">
                <Image
                  src="/thumbnail_Wanda(1).jpg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col space-y-1">
                  <p>purple sticky bud out,...</p>
                  <div className="flex items-center space-x-2">
                    <p className="bg-red-500 text-white text-sm px-3 py-0.5 rounded-full">
                      Stock out
                    </p>
                    <p>Dec 02 2024 - 16:16pm</p>
                  </div>
                </div>
                <button>
                  <X className="ml-2" />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <Image
                src="/thumbnail_Wanda(1).jpg"
                alt="User Profile"
                width={200}
                height={200}
                className="w-8 h-8 rounded-full"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Edit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
