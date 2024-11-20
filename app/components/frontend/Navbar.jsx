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
  // if (status === "loading") {
  //   return <Loading />;
  // }
  return (
    <div className=" bg-white dark:bg-[#252525] border-t border-b border-l border-r   border-[#000000] dark:border-[#666666] ">
      <div className="flex items-center justify-between   mx-auto gap-8">
        <Link
          className="font-bold transition-colors duration-200 hover:bg-black hover:text-white px-5 py-2"
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 1, 0.2, 1)" }}
          href="/"
        >
          BLATTCLUB
        </Link>
        <div className="flex-grow"></div>

        <div className="flex">
          {status === "unauthenticated" ? (
            <Link
              href="/login"
              className="flex items-center space-x-1 dark:text-white text-black transition-colors duration-200 hover:bg-black hover:text-white"
              style={{
                transitionTimingFunction: "cubic-bezier(0.2, 1, 0.2, 1)",
              }}
            >
              {/* <User size={14} strokeWidth={2} /> */}
              <span className="text-[1rem] border-l border-r border-black dark:border-[#666666] px-5 py-2 ">
                Login
              </span>
            </Link>
          ) : (
            <UserAvatar user={session?.user} />
          )}

          <HelpModal className="w-2 h-2 " />
          <CartCount />
        </div>

        <SearchForm />
        <ThemeSwitcherBtn />
      </div>
    </div>
  );
}
