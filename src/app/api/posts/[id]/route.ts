import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import connect from "@/Model/db";
import Posts from "@/Model/Post";

export const GET = async (
  req: NextApiRequest,
  { params }: { params: { id: string } },
  res: NextApiResponse
) => {
  const { id } = params;
  try {
    await connect();
    const post = await Posts.findById(id);
    return NextResponse.json({ status: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { status: "Fail", message: "Database error." },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextApiRequest,
  { params }: { params: { id: string } },
  res: NextApiResponse
) => {
  const { id } = params;

  try {
    await connect();

    await Posts.findByIdAndDelete(id);

    return NextResponse.json(
      { status: "Success", message: "Post has been deleted." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "Fail", message: "Database Error." },
      { status: 500 }
    );
  }
};
