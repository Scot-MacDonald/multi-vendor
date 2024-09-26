import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const order = await db.order.findUnique({
      where: {
        id,
      },
      include:{
        orderItems:true
      },

      // Uncomment and adjust the following block if you want to order the results
      // orderBy: {
      //   createdAt: "desc",
      // },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to fetch order", error },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingOrder = await db.order.findUnique({
      where: {
        id,
      },
    });
    if (!existingOrder) {
      return NextResponse.json(
        {
          data: null,
          message: "Order Not Found",
        },
        { status: 404 }
      );
    }
    const deletedOrder = await db.order.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete order", error },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      isActive,
      content,
    } = await request.json();
    const existingOrder = await db.order.findUnique({
      where: {
        id,
      },
    });
    if (!existingOrder) {
      return NextResponse.json(
        {
          data: null,
          message: `Not Found`,
        },
        { status: 404 }
      );
    }
    const updatedOrder = await db.order.update({
      where: { id },
      data: {
        title,
        slug,
        categoryId,
        imageUrl,
        description,
        isActive,
        content,
      },
    });
    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Order",
        error,
      },
      { status: 500 }
    );
  }
}
