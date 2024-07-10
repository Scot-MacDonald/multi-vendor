import { NextResponse } from "next/server";
// API NEEDS TO BE SET UP ON MONGO
export async function POST(request) {
  try {
    const {
      code,
      contactPerson,
      contactPersonPhone,
      email,
      name,
      notes,
      phone,
      physicalAddress,
      terms,
      isActive,
      profileImageUrl,
    } = await request.json();
    const newFarmer = {
      code,
      contactPerson,
      contactPersonPhone,
      email,
      name,
      notes,
      phone,
      physicalAddress,
      terms,
      isActive,
      profileImageUrl,
    };
    console.log(newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to create farmer", error },
      { status: 500 }
    );
  }
}
