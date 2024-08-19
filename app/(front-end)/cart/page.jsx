"use client";
import Breadcrumb from "@/app/components/frontend/Breadcrumb";
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {/* CART 1 */}
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/weed.jpg"
                  width={250}
                  height={250}
                  alt="Alt text"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>Apple watch basic sample</h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
                <button className="border-r border-gray-400 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-4">1</p>
                <button className="border-l border-gray-400 py-2 px-4">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <h4>49</h4>
                <button>
                  <Trash2 className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
            {/* CART 2 */}
            <div className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/weed.jpg"
                  width={250}
                  height={250}
                  alt="Alt text"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>Apple watch basic sample</h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
                <button className="border-r border-gray-400 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-4">1</p>
                <button className="border-l border-gray-400 py-2 px-4">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <h4>49</h4>
                <button>
                  <Trash2 className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          {/* COUPON */}
          <div className="flex items-center gap-2 py-4">
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2"
              placeholder="Enter Coupon"
            />
            <button className="shrink-0 py-2.5 px-4 bg-black text-white font-normal">
              Apply Coupon
            </button>
          </div>
        </div>
        <div className="col-span-4 md:block border border-dashed border-gray-900/25 dark:border-[#666666] rounded-md overflow-hidden p-5 font-bold">
          <h2 className="text-2xl pb-3">Cart Total</h2>
          <div className="flex items-center justify-between border-b border-slate-400 pb-6">
            <span>Subtotal</span>
            <span>€589</span>
          </div>
          <div className="flex items-center justify-between pb-4 mt-2">
            <span>Tax</span>
            <span>€0</span>
          </div>
          <div className="flex items-center justify-between pb-4">
            <span>Shipping</span>
            <span>€5</span>
          </div>
          <p className="border-b border-slate-400 pb-3 font-normal">
            A text here about the shipping prices or whatever is useful.
          </p>
          <div className="flex items-center justify-between py-4 font-bold">
            <span>Total</span>
            <span>€100</span>
          </div>
          <Link href="#" className="bg-black text-white py-2 px-4 font-normal">
            Continue to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}
