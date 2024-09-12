import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const farmerData = await request.json();

    // Check if the user already exists
    const existingUser = await db.user.findUnique({
      where: {
        id: farmerData.userId,
      },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "No user found",
        },
        { status: 409 }
      );
    }
    const updatedUser = await db.user.update({
      where: {
        id: farmerData.userId,
      },
      data: {
        emailVerified: true,
      },
    });


    const newFarmerProfile = await db.farmerProfile.create({
      data: {
        code: farmerData.code,
        contactPerson: farmerData.contactPerson || null,
        contactPersonPhone: farmerData.contactPersonPhone || null,
        profileImageUrl: farmerData.profileImageUrl || null,
        email: farmerData.email,
        name: farmerData.name,
        notes: farmerData.notes || null,
        phone: farmerData.phone,
        physicalAddress: farmerData.physicalAddress || null,
        terms: farmerData.terms || null,
        isActive: farmerData.isActive,
        products: farmerData.products,
        landSize: parseFloat(farmerData.landSize) || 0,
        mainCrop: farmerData.mainCrop,
        user: {
          connect: { id: farmerData.userId }, // Connect to the existing user
        },
      },
    });
    console.log(newFarmerProfile);
    return NextResponse.json(newFarmerProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create farmer", error },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const farmers = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "FARMER",
      },
      include: {
        farmerProfile: true,
      },
    });
    return NextResponse.json(farmers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch farmers.", error },
      { status: 500 }
    );
  }
}

// export async function POST(request) {
//   try {
//     const farmerData = await request.json();
//     const newFarmerProfile = await db.farmerProfile.create({
//       data: {
//         code: farmerData.code,
//         contactPerson: farmerData.contactPerson,
//         contactPersonPhone: farmerData.contactPersonPhone,
//         profileImageUrl: farmerData.profileImageUrl,
//         email: farmerData.email,
//         name: farmerData.name,
//         notes: farmerData.notes,
//         phone: farmerData.phone,
//         physicalAddress: farmerData.physicalAddress,
//         terms: farmerData.terms,
//         isActive: farmerData.isActive,
//         products: farmerData.products,
//         landSize: parseFloat(farmerData.landSize),
//         mainCrop: farmerData.mainCrop,
//         userId: farmerData.userId,
//       },
//     });
//     console.log(newFarmer);
//     return NextResponse.json(newFarmerProfile);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "failed to create farmer", error },
//       { status: 500 }
//     );
//   }
// }
// export async function GET(request) {
//   try {
//     const profiles = await db.farmerProfile.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return NextResponse.json(profiles);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { maessage: "Failed to fetch profile.", error },
//       { status: 500 }
//     );
//   }
// }
