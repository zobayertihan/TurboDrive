import { connectmongoDB } from "@/lib/mongodb";
import Car from "@/models/cars";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "Email parameter is required." },
        { status: 400 }
      );
    }

    await connectmongoDB();

    const cars = await Car.find({ email: email }).sort({ createdAt: -1 });
    return NextResponse.json({ cars }, { status: 200 });
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching car data." },
      { status: 500 }
    );
  }
}
