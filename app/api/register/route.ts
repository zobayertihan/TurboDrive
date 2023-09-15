import { connectmongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { userDetailsProps } from "@/types";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: any) {
  try {
    const { name, phone, email, password, confirmPassword }: userDetailsProps =
      await req.json();

    const hashedPassword = await bcrypt.hash(password || "", 10);
    const hashedConfirmPassword = await bcrypt.hash(confirmPassword || "", 10);
    await connectmongoDB();
    await User.create({
      name,
      phone,
      email,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
    });
    // console.log(name, phone, email, password, confirmPassword);
    // return res.status(201);
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    // return res.status(401);
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
