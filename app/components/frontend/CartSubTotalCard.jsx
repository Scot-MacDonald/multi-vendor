import Link from "next/link";
import React from "react";

export default function CartSubTotalCard({ subTotal }) {
  const shipping = 10.0;
  const tax = 0.0;


  const totalPrice = (
    Number(subTotal) +
    Number(shipping) +
    Number(tax)
  ).toFixed(2);
  return (
    <div className="md:col-span-5 sm:col-span-full col-span-full sm:block overflow-hidden p-5">
      <h2 className="text-md lg:text-md font-bold uppercase ">Cart Total</h2>
      <div className="flex items-center justify-between border-b border-slate-400 pb-2 font-semibold text-[.85rem] text-[#b4b4b4]">
        <span className="uppercase">Subtotal</span>
        <span>€ {subTotal}</span>
      </div>
      <div className="flex items-center justify-between pb-4 mt-2">
        <span>Tax</span>
        <span>€ {tax}</span>
      </div>
      <div className="flex items-center justify-between pb-4">
        <span>Shipping</span>
        <span>€ {shipping}</span>
      </div>
      <p className="border-b border-slate-400 pb-3 text-[.85rem] text-[#b2b2b2]">
        A text here about the shipping prices or whatever is useful.
      </p>
      <div className="flex items-center justify-between py-4 font-bold">
        <span>Total</span>
        <span>€ {totalPrice}</span>
      </div>
      <Link href="#" className="bg-black text-white py-2 px-4 font-normal">
        Continue to Payment
      </Link>
    </div>
  );
}