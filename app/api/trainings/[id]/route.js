import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const training = await db.training.findUnique({
      where: {
        id,
      },

      // Uncomment and adjust the following block if you want to order the results
      // orderBy: {
      //   createdAt: "desc",
      // },
    });

    return NextResponse.json(training);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to fetch training", error },
      { status: 500 }
    );
  }
}


export async function DELETE(request, { params: { id } }) {
  try {
    const existingTraining = await db.training.findUnique({
      where: {
        id,
      },
    });
    if(!existingTraining){
      return NextResponse.json({
        data: null,
        message: "Training Not Found",
      }, {status:404});
    }
    const deletedTraining = await db.training.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedTraining);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to delete training", error },
      { status: 500 }
    );
  }
}
