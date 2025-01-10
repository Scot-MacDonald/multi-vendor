import React from "react";
import CartProduct from "./CartProduct";
import EmptyCart from "./EmptyCart";

export default function CartItems({ cartItems }) {
  return (
    <div className="lg:col-span-4 sm:col-span-full col-span-full  p-5 border border-black dark:border-[#666666]">
      <h2 className="text-md lg:text-md font-bold uppercase  ">Your Cart</h2>
      {cartItems.length > 0 && (
        <>
          <div className="flex items-center justify-between border-b text-[#b4b4b4] border-black dark:border-[#666666] pb-2 font-semibold text-[.85rem]">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
        </>
      )}

      <div className="">
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => {
            return <CartProduct cartItem={item} key={i} />;
          })
        ) : (
          <EmptyCart />
        )}
      </div>
      <div className="flex items-center justify-between  font-bold">
        <span>Coupon</span>
        <span></span>
      </div>
      {/* COUPON */}
      <div className="flex items-center gap-2 py-4">
        <input
          type="text"
          id="email"
          className=" border-black dark:border-[#666666] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block ps- p-2.5  dark:bg-[#252525] dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2"
          placeholder="Enter Coupon"
        />
        <button className="shrink-0 py-2 px-4 bg-black dark:bg-transparent border border-black dark:border-[#666666] text-white font-normal">
          Apply Coupon
        </button>
      </div>
    </div>
  );
}
