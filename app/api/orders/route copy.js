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

    //Create orderNumber
    function generateOrderNumber(length) {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let orderNumber = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
      }

      return orderNumber;
    }

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
        orderNumber: generateOrderNumber(8),
      },
    });

    // Create new order items
    const newOrderItems = await db.orderItem.createMany({
      data: orderItems.map((item) => ({
        productId: item.id,
        vendorId: item.id,
        quantity: parseInt(item.qty),
        price: parseFloat(item.salePrice),
        orderId: newOrder.id,
        imageUrl: item.imageUrl,
        title: item.title,

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
      include: {
        orderItems: true,
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
