import { NextRequest, NextResponse } from "next/server";
import dbConnection from "@/database/dbConnection";
import User from "@/models/useer.model";
import bcrypt from "bcryptjs";

dbConnection();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password } = body;
    // console.log(username, email, password);
    if (!username || !email || !password) {
      return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 });
    }
    const existingUser = await User.findOne({ email});
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }
    const genesaltedPassword = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, genesaltedPassword);

    await User.create({ username, email, password: hashedPassword});
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });

  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}