import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, logoUrl, description } = await request.json();
    const newMarket = { title, slug, logoUrl, description };
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { maessage: "failed to create market", error },
      { status: 500 }
    );
  }
}
