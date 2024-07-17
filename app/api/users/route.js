// import { NextResponse } from "next/server"
// import db from "@/lib/db"
// import bcrypt from 'bcrypt'

// export default async function POST(request){
//     try {
//         const {name, email, password, role}= await request.json()
//         const existingUser = await db.user.findUnique({
//             where:{
//                 email
//             }
//         });
//         if(existingUser){
//             return NextResponse.json({
//                 data: null,
//                 message:"User already exist."
//             },{ status:409 })
//         }
//         const hashedPassword = await bcrypt.hash(password,10)
//         const newUser = await db.user.create({
//             data:{
//                 name, email, password: hashedPassword, role
//             }
//         });
//         console.log(newUser);
//         return NextResponse.json({
//             data: newUser,
//             message: "User created successfully."
//         },{
//             status:201
//         });
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({
//             error,
//             message:"Server Error: Something went wrong",
//         },{
//             status:500
//         })
//     }
// }
// export async function GET(request) {
//     try {
//       const users = await db.user
//         .findMany(
//           {
//           orderBy: {
//             createdAt: "desc",
//           },
//         });
//       return NextResponse.json(users);
//     } catch (error) {
//       console.log(error);
//       return NextResponse.json(
//         { maessage: "failed to fetch users", error },
//         { status: 500 }
//       );
//     }
//   }


import { NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcrypt";
// Handle POST requests
export async function POST(request) {
  try {
    const { name, email, password, role } = await request.json();
    // Check if all required fields are provided
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        {
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }
    // Check if the user already exists
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User already exists.",
        },
        { status: 409 }
      );
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the new user
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    console.log(newUser);
    return NextResponse.json(
      {
        data: newUser,
        message: "User created successfully.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error in POST /api/users:", error.message, error.stack);
    return NextResponse.json(
      {
        error: error.message,
        message: "Server Error: Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET(request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error in GET /api/users:", error.message, error.stack);
    return NextResponse.json(
      { message: "Failed to fetch users", error: error.message },
      { status: 500 }
    );
  }
}