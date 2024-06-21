import { NextRequest, NextResponse } from "next/server";
import User from "@/models/useer.model";
import dbConnection from "@/database/dbConnection";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dbConnection();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json(
        { error: "Please provide email and password" },
        { status: 400 }
      );
    }
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );
    const res = NextResponse.json(
      { message: `Welcome back ${user.username}` },
      { status: 200 }
    );
    res.cookies.set("token", token, { httpOnly: true });
    return res;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
