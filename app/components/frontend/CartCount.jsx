"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function CartCount() {
  //   const cartItems = useSelector((store) => store.cart);
  const cartItems = useSelector((store) => store.cart);
  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center text-[1rem] text-center text-black dark:text-white bg-transparent transition-colors duration-200 hover:bg-black hover:text-white"
      style={{ transitionTimingFunction: "cubic-bezier(0.2, 1, 0.2, 1)" }}
    >
      <div className="flex items-center space-x-1 px-5 py-2 border-r border-black dark:border-[#666666]">
        <span>Bag</span>
        <div className="inline-flex items-center justify-center w-4 h-4 text-xs font-bold rounded-full border-transparent dark:border-gray-900">
          ({cartItems.length})
        </div>
      </div>
    </Link>
  );
}
