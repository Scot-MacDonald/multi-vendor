import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const existingCategory = await db.category.findUnique({
      where: {
        slug,
      },
    });
    if (existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "Category already exists",
        },
        { status: 409 }
      );
    }
    const newCategory = await db.category.create({
      data: { title, slug, imageUrl, description, isActive },
    });
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { maessage: "failed to create category", error },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const categories = await db.category.findMany({
      include: {
        products: true,
      },
      // Uncomment and adjust the following block if you want to order the results
      // orderBy: {
      //   createdAt: "desc",
      // },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to fetch category", error },
      { status: 500 }
    );
  }
}
