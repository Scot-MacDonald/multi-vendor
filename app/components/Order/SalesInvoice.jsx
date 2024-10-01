"use client";
// import Image from "next/image";
// import logo from "../../public/limiLogo.webp";
import { convertIsoDateToNormal } from "@/lib/convertIsoDatetoNormal";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
export default function SalesInvoice({ order }) {
  const shippingCost = order.shippingCost;

  const invoiceDate = convertIsoDateToNormal(order.createdAt);
  const subTotal =
    order.orderItems
      .reduce((acc, currentItem) => {
        return acc + currentItem.price * currentItem.quantity;
      }, 0)
      .toFixed(2) ?? 0;

  const total = (parseFloat(subTotal) + parseFloat(order.shippingCost)).toFixed(
    2
  );

  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  return (
    <div className="flex flex-col">
      {/* DOWNLOAD BTN */}
      <div className="flex items-end justify-end mb-8">
        <button
          onClick={handlePrint}
          type="button"
          className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold dark:text-gray-900 transition-all duration-200 dark:bg-gray-100 bg-slate-800 text-slate-200  border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
        >
          Download/Print Invoice
        </button>
      </div>
      {/* INVOICE */}
      <div ref={invoiceRef}>
        <div className="max-w-4xl mx-auto border border-[#666666] p-8 rounded-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-[#2b2b2b]">
          {/* Header */}
          <div className="flex justify-between border-b border-gray-500 pb-8">
            <div className="flex flex-col">
              <h2>Bill From:</h2>
              <p>LimiFood </p>
              <p>150 Eleign Street</p>
              <p>Canada</p>
              <p>sales@limifood.com</p>
            </div>
            <div className="w-36 h-24" />
            Blattclub
            <div />
          </div>
          {/* Header End */}
          <div className="flex justify-between border-b border-gray-500 py-8">
            <div className="flex flex-col">
              <h2>Bill To:</h2>
              <p>
                {order.firstName} {order.lastName}
              </p>
              <p>
                {order?.apartment} {order.streetAddress}
              </p>
              <p>{order?.state}</p>
              <p>
                {order.city} - {order.country}
              </p>
              <p>{order.email}</p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p>Invoice #</p>
                <p>{order.orderNumber}</p>
              </div>
              <div className="flex justify-between gap-4">
                <p>Invoice Date</p>
                <p>{invoiceDate}</p>
              </div>
              <div className="flex justify-between gap-4">
                <p>Amount Due</p>
                <p>${total}</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#252525] dark:text-gray-400">
                <tr>
                  {/* <th scope="col" className="px-6 py-3">
                    Item Image
                  </th> */}
                  <th scope="col" className="px-6 py-3">
                    Item Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Cost
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Line Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems.map((item, i) => {
                  const itemSubtotal = (item.quantity * item.price).toFixed(2);
                  return (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-[#303030] dark:border-gray-700"
                    >
                      <td className="px-6 py-4 truncate">{item.title}</td>
                      <td className="px-6 py-4">{item.quantity}</td>
                      <td className="px-6 py-4">${item.price}</td>
                      <td className="px-6 py-4">${itemSubtotal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between border-b border-gray-500 py-8">
            <div className="flex flex-col">
              <h2>NOTES</h2>
              <p>
                {shippingCost == 50
                  ? "Your Delivery is within 3 days "
                  : shippingCost == 75
                  ? "Your Delivery is within 2 days"
                  : shippingCost == 90
                  ? "Your Delivery is within 1 day"
                  : "Thank you for making business with us"}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between gap-4">
                <p>SubTotal</p>
                <p>${subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>${order?.shippingCost}</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>${total}</p>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center items-center pt-8">
            <Image src={logo} alt="limifood logo" className="w-36 h-16" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
