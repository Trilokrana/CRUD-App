import { NextResponse } from "next/server";
import  User from '@/models/user';
import connectToMongoDB from '@/libs/mongoDB';

export async function POST(req) {
  try {
    await connectToMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}