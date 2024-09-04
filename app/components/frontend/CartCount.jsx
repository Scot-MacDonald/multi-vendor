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
      className="relative inline-flex items-center text-[.75rem] text-center text-black bg-transparent rounded-lg "
    >
      {/* <span>Cart</span> */}
      <ShoppingCart
        size={14}
        strokeWidth={2}
        className="dark:text-white text-black"
      />
      <span className="sr-only">Cart</span>
      <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
        {cartItems.length}
      </div>
    </Link>
  );
}
