import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
  try {
    const market = await db.market.findUnique({
      where: {
        slug,
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
