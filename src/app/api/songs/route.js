import connectDB from "@/libs/mongodn"
import Songs from "@/models/songs"
import { NextResponse } from "next/server"

export async function GET() {
    await connectDB()
    const songs = await Songs.find()
    return NextResponse.json(songs)
}

export async function POST(request) {
    await connectDB()
    const data = await request.json()
    const songs = await Songs.create(data)
    return NextResponse.json(songs)
}
