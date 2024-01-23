/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import style from "@/styles/style";

export const runtime = "edge";

export default async function handler(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div className="card container" style={style.card}>
          <div style={style.user}>
            <div style={style.info}>
              <div style={{ ...style.imgSec, ...style.imgOnline }}>
                <img
                  src="https://avatars.akamai.steamstatic.com/a691782e9df50a0a5052ba0edb8df5b1789906a0_full.jpg"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 360,
        height: 125,
      }
    );
  } catch (e) {
    Response.json({ error: e }, { status: 500 });
  }
}
