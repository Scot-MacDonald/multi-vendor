import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const farmer = await db.user.findUnique({
      where: {
        id,
      },

      include: {
        farmerProfile: true,
      },
    });

    return NextResponse.json(farmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to fetch farmer", error },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingUser = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "Farmer Not Found",
        },
        { status: 404 }
      );
    }
    const deletedUser = await db.user.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete user", error },
      { status: 500 }
    );
  }
}
