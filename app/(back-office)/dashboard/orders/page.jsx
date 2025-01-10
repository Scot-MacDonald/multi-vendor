import OrderCard from "@/app/components/Order/OrderCard";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const orders = await getData("orders");
  // get user id
  const session = await getServerSession(authOptions);
  if (!session) return;

  const userId = session?.user?.id;
  if (orders.length === 0 || !orders) {
    return <p>No orders yet</p>;
  }
  // filter by user id
  const userOrders = orders.filter((order) => order.userId === userId);
  return (
    <section className="p-4 bg-white">
      <div className="">
        <div className="">
          <div>
            <h1 className="text-[16px] font-bold text-black ">Your Orders</h1>
            <p className="mt-2 text-sm font-normal text-gray-600">
              Check the status of recent and old orders & discover more products
            </p>
          </div>

          <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
            {userOrders.map((order, i) => {
              return <OrderCard key={i} order={order} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
