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
      className="relative inline-flex items-center text-[1rem] text-center text-black dark:text-white bg-transparent rounded-lg "
    >
      <span className="border-r border-black dark:border-[#666666] px-5 py-2">
        Bag
      </span>
      {/* <ShoppingCart
        size={14}
        strokeWidth={2}
        className="dark:text-white text-black"
      /> */}
      <span className="sr-only">Cart</span>
      <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-green-500  rounded-full -top-0 start-10 dark:border-gray-900">
        {cartItems.length}
      </div>
    </Link>
  );
}
