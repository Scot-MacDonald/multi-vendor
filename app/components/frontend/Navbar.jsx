"use client";
import React from "react";
import { Cannabis, HelpCircle, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";
import SearchForm from "./SearchForm";
import HelpModal from "./HelpModal";
import CartCount from "./CartCount";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";
import UserAvatar from "../backoffice/UserAvatar";

export default function Navbar() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    <Loading />;
  }
  return (
    <div className=" bg-white dark:bg-[#252525] border-t-8 border-b-8  border-l-8 border-r-8   border-[#f8f8f8] dark:border-[#303030]">
      <div className="flex items-center justify-between py-  mx-auto px-5 gap-8">
        <Link className="font-bold" href="/">
          {/* <Cannabis size={32} color="#249a38" strokeWidth={1} /> */}
          BLATTCLUB
        </Link>
        <div className="flex-grow"></div>

        <div className="flex gap-4">
          {status === "unauthenticated" ? (
            <Link
              href="/login"
              className="flex items-center space-x-1 dark:text-white text-black"
            >
              {/* <User size={14} strokeWidth={2} /> */}
              <span className="text-[.75rem] ">Login</span>
            </Link>
          ) : (
            <UserAvatar user={session?.user} />
          )}

          <HelpModal className="w-2 h-2" />
          <CartCount />
        </div>

        <SearchForm />
        <ThemeSwitcherBtn />
      </div>
    </div>
  );
}
