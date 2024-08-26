import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const farmer = await db.farmer.findUnique({
      where: {
        id,
      },

      // Uncomment and adjust the following block if you want to order the results
      // orderBy: {
      //   createdAt: "desc",
      // },
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
    const existingFarmer = await db.farmer.findUnique({
      where: {
        id,
      },
    });
    if(!existingFarmer){
      return NextResponse.json({
        data: null,
        message: "Farmer Not Found",
      }, {status:404});
    }
    const deletedFarmer = await db.farmer.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(eletedFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete farmer", error },
      { status: 500 }
    );
  }
}
