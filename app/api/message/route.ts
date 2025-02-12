import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest): Promise<NextResponse> {
    console.log("API ENDPOINT HIT");

    return NextResponse.json({ msg: "Hello World" });
}