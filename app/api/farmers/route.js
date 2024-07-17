import { NextResponse } from "next/server";
// API NEEDS TO BE SET UP ON MONGO
export async function POST(request) {
  try {
    // const {
    //   code,
    //   contactPerson,
    //   contactPersonPhone,
    //   email,
    //   name,
    //   notes,
    //   phone,
    //   physicalAddress,
    //   terms,
    //   isActive,
    //   profileImageUrl,
    //   products,
    //   landSize,
    //   mainCrop,
    //   userId
    // } 
    const farmerData = await request.json();
    const newFarmerProfile = await db.farmerProfile.create( {
      data:{
        code : farmerData.code,
        contactPerson : farmerData.contactPerson,
        contactPersonPhone : farmerData.contactPersonPhone,
        profileImageUrl : farmerData.profileImageUrl,
        email : farmerData.email,
        name : farmerData.name,
        notes : farmerData.notes,
        phone : farmerData.phone,
        physicalAddress : farmerData.physicalAddress,
        terms : farmerData.terms,
        isActive : farmerData.isActive,
        products : farmerData.products,
        landSize : parseFloat(farmerData.landSize),
        mainCrop : farmerData.mainCrop,
        userId : farmerData.userId,
      }
    });
    console.log(newFarmerProfile);
    return NextResponse.json(newFarmerProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to create farmer", error },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const profiles = await db.famerProfile.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    return NextResponse.json(profiles);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { maessage: "Failed to fetch profile.", error },
      { status: 500 }
    );
  }
}