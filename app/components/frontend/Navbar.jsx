import React from "react";
import { Cannabis, HelpCircle, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";
import SearchForm from "./SearchForm";
import HelpModal from "./HelpModal";

export default function Navbar() {
  return (
    <div className=" bg-white dark:bg-[#252525] border-t-8 border-b-8  border-l-8 border-r-8   border-[#f8f8f8] dark:border-[#303030]">
      <div className="flex items-center justify-between py-3  mx-auto px-8 gap-8">
        <Link className="" href="/">
          <Cannabis size={32} color="#249a38" strokeWidth={1} />
        </Link>
        <div className="flex-grow">
          <SearchForm />
        </div>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="flex items-center space-x-1 dark:text-white text-black"
          >
            <User />
            <span>Login</span>
          </Link>

          <HelpModal />
          <Link
            href="/cart"
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg "
          >
            <ShoppingCart className="dark:text-white text-black" />
            <span className="sr-only">Cart</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
              20
            </div>
          </Link>
        </div>
        <ThemeSwitcherBtn />
      </div>
    </div>
  );
}
