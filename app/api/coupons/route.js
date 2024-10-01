import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request) {
  try {
    const { title, couponCode, expiryDate, isActive, vendorId } =
      await request.json();

    const newCoupon = await db.coupon.create({
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
        vendorId,
      },
    });
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { maessage: "failed to create coupon", error },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const coupons = await db.coupon
      .findMany
      //   {
      //   orderBy: {
      //     createdAt: "desc",
      //   },
      // }
      ();
    return NextResponse.json(coupons);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { maessage: "failed to fetch coupon", error },
      { status: 500 }
    );
  }
}
