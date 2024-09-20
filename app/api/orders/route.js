import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { checkoutFormData, orderItems } = await request.json();
    const {
      city,
      country,
      zipCode,
      email,
      firstName,
      lastName,
      paymentMethod,
      phone,
      shippingCost,
      streetAddress,
      userId,
    } = checkoutFormData;

    // Create a new order
    const newOrder = await db.order.create({
      data: {
        userId,
        // Personal details
        firstName,
        lastName,
        email,
        phone,
        // Shipping details
        streetAddress,
        city,
        country,
        zipCode,
        shippingCost: parseFloat(shippingCost),
        // Payment method
        paymentMethod,
      },
    });

    // Create new order items
    const newOrderItems = await db.orderItem.createMany({
      data: orderItems.map((item) => ({
        productId: item.id,
        quantity: parseInt(item.qty),
        price: parseFloat(item.salePrice),
        orderId: newOrder.id,
        // Ensure `title` exists in your Prisma schema if you're using it
        // title: item.title,
      })),
    });

    console.log(newOrder, newOrderItems);
    return NextResponse.json(newOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create order", error },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch orders", error },
      { status: 500 }
    );
  }
}