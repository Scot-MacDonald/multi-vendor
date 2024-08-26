import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const staff = await db.staff.findUnique({
      where: {
        id,
      },

      // Uncomment and adjust the following block if you want to order the results
      // orderBy: {
      //   createdAt: "desc",
      // },
    });

    return NextResponse.json(staff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to fetch staff", error },
      { status: 500 }
    );
  }
}


export async function DELETE(request, { params: { id } }) {
  try {
    const existingStaff = await db.staff.findUnique({
      where: {
        id,
      },
    });
    if(!existingStaff){
      return NextResponse.json({
        data: null,
        message: "Staff Not Found",
      }, {status:404});
    }
    const deletedCStaff = await db.staff.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete staff", error },
      { status: 500 }
    );
  }
}
