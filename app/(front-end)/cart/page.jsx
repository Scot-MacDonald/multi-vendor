"use client";
import Breadcrumb from "@/app/components/frontend/Breadcrumb";
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartProduct from "@/app/components/frontend/CartProduct";
import CartItems from "@/app/components/frontend/CartItems";
import CartSubTotalCard from "@/app/components/frontend/CartSubTotalCard";
import EmptyCart from "@/app/components/frontend/EmptyCart";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems
      .reduce((acc, currentItem) => {
        return acc + currentItem.salePrice * currentItem.qty;
      }, 0)
      .toFixed(2) ?? 0;
  console.log(subTotal);
  return (
    <div className="w-full">
      <Breadcrumb />
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-12 h-[calc(100vh-150px)] overflow-auto gap-2">
          <CartItems cartItems={cartItems} />
          <CartSubTotalCard subTotal={subTotal} />{" "}
        </div>
      ) : (
        <div className="pl-1 h-[calc(100vh-150px)]">
          <EmptyCart />
        </div>
      )}
    </div>
  );
}
