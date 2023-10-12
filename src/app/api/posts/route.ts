import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import connect from "@/Model/db";
import Posts from "@/Model/Post";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");

  try {
    await connect();
    console.log(username);
    const posts = !username
      ? await Posts.find()
      : await Posts.find({ username });

    return NextResponse.json({ status: "Success", posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { status: "Fail", message: "Database error", error },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  const body = await req.json();

  const newPost = new Posts(body);

  try {
    await connect();
    await newPost.save();
    return NextResponse.json(
      { status: "Success", message: "Post has been created." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "Fail", message: "Database Error", error },
      { status: 500 }
    );
  }
};
