import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";


export const runtime = "edge";

export default async function handler(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");

    const steamHtml = await fetch(`https://steamcommunity.com/id/${id}`).catch(er=>{return er;});

    return new ImageResponse(
        <div>
            <p>{JSON.stringify(steamHtml)}</p>
        </div>
    )
}