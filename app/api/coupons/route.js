import { NextResponse } from "next/server";
// API NEEDS TO BE SET UP ON MONGO
export async function POST(request) {
  try {
    const { title, couponCode, expiryDate } = await request.json();
    const newCoupon = { title, couponCode, expiryDate };
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
