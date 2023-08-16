import { connectmongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    await connectmongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log(user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
