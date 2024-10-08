"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, LogOut, Settings } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { generateInitials } from "@/lib/generateInitials";

export default function UserAvatar({ user = {} }) {
  const { name, image } = user;
  const initials = generateInitials(name);
  const role = user?.role;
  const router = useRouter();
  async function handleLogout() {
    await signOut();
    router.push("/");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="border-l border-r border-black dark:border-[#666666] px-5 py-1">
          <button>
            {image ? (
              <Image
                src="/thumbnail_Wanda(1).jpg"
                alt="User Profile"
                width={200}
                height={200}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full text-black dark:text-white bg-white dark:bg-[#252525] p-2 flex items-center justify-center">
                {initials}
              </div>
            )}
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-2 px-2 ">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="flex" href="/dashboard">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="flex" href="dashboard/profile">
            <Settings className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
          </Link>
        </DropdownMenuItem>
        {role === "USER" && (
          <DropdownMenuItem>
            <Link className="flex" href="dashboard/orders">
              <Settings className="mr-2 h-4 w-4" />
              <span>My Orders</span>
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <button className="flex" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
