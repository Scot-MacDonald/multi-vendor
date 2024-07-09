import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      code,
      isActive,
    } = await request.json();
    const newStaff = {
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      code,
      isActive,
    };
    console.log(newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { maessage: "failed to create staff", error },
      { status: 500 }
    );
  }
}
