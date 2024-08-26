import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const banner = await db.banner.findUnique({
      where: {
        id,
      },

      // Uncomment and adjust the following block if you want to order the results
      // orderBy: {
      //   createdAt: "desc",
      // },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to fetch banner", error },
      { status: 500 }
    );
  }
}


export async function DELETE(request, { params: { id } }) {
  try {
    const existingBanner = await db.banner.findUnique({
      where: {
        id,
      },
    });
    if(!existingBanner){
      return NextResponse.json({
        data: null,
        message: "Banner Not Found",
      }, {status:404});
    }
    const deletedBanner = await db.banner.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedBanner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete banner", error },
      { status: 500 }
    );
  }
}
