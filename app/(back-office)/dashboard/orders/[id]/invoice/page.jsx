import SalesInvoice from "@/app/components/Order/SalesInvoice";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({ params: { id } }) {
  //   const orderId = "66f6ced554c90a30daf889af";
  const order = await getData(`orders/${id}`);
  //   console.log(order);
  return <SalesInvoice order={order} />;
}
