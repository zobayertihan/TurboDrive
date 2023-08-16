import { connectmongoDB, disconnectMongoDB } from "@/lib/mongodb";
import { oneCarDetailsProps } from "../../../types/index";
import Car from "@/models/cars";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { car, model, image, email }: oneCarDetailsProps = await req.json();

    await connectmongoDB();
    await Car.create({
      car,
      model,
      photo: image,
      email,
    });
    return NextResponse.json(
      { message: "Car Details Inserted." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  } finally {
    disconnectMongoDB();
  }
}
