import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
    try {
        const res = NextResponse.json({message: "Logout successful"},{status: 200})
        res.cookies.set("token", "",{httpOnly: true, expires: new Date(0)})
        return res
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}