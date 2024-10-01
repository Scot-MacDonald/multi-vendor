import { NextResponse } from "next/server";
import db from "@/lib/db"; // Ensure you import your database client

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
      select: {
        email: true,
        name: true,
        id: true,
        role: true,
        createdAt: true,
        profile: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: "Failed to fetch user", error },
      { status: 500 }
    );
  }
}
