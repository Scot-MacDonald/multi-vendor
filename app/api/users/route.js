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
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { Resend } from "resend";
import EmailTemplate from "@/app/components/email-template";
// // Handle POST requests
export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
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
    //Generate Token
    // Generate a random UUID (version 4)
    const rawToken = uuidv4();
    console.log(rawToken);
    // Encode the token using Base64 URL-safe format
    const token = base64url.encode(rawToken);

    // Create the new user
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        verificationToken: token,
      },
    });
    console.log(newUser);
    if (role === "FARMER") {
      //Send an Email with the Token on the link as a search param
      const userId = newUser.id;
      const linkText = "Verify Account";
      const redirectUrl = `onboarding/${userId}?token=${token}`;
      const sendMail = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: email,
        subject: "Account Verification from Blattclub",
        react: EmailTemplate({ name, redirectUrl, linkText }),
      });
      console.log(sendMail);
      //Upon Click redirect them to the login
    }
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
