import User from "@/Model/User";
import connect from "@/Model/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return NextResponse.json(
      { status: "Success", message: "Sign up is successful." },
      {
        status: 201,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "Fail", message: "Database error", err },
      {
        status: 500,
      }
    );
  }
};
