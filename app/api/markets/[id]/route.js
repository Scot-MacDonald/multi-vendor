import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const market = await db.market.findUnique({
      where: {
        id,
      },

      // Uncomment and adjust the following block if you want to order the results
      // orderBy: {
      //   createdAt: "desc",
      // },
    });

    return NextResponse.json(market);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to fetch market", error },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingMarket = await db.market.findUnique({
      where: {
        id,
      },
    });
    if (!existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "Market Not Found",
        },
        { status: 404 }
      );
    }
    const deletedMarket = await db.market.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete market", error },
      { status: 500 }
    );
  }
}
