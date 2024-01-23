/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import style from "@/styles/style";
import { basicUserInfo } from "@/utils/types";

export const runtime = "edge";

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");
    const costumeComponent = searchParams.get("costume");

    if (!id) {
      return new ImageResponse(<>{'Visit with "?id=vercel"'}</>, {
        width: 1200,
        height: 630,
      });
    }

    const steamData = await fetch(process.env.URL + "/api/htmlApi?id=" + id, {
      method: "GET",
    });

    if (steamData.status !== 200) {
      return Response.json({
        error: "Steam Profile not found",
      });
    }

    const AllData: any = await steamData.json();

    const basicUser: basicUserInfo = AllData.basicUser;

    const mainLevelDef = () => {
      if (basicUser.userInfo.level >= 100) {
        return Math.floor(basicUser.userInfo.level / 100) * 100;
      } else {
        return Math.floor(basicUser.userInfo.level / 10) * 10;
      }
    };

    const levelClass = style["friendPlayerLevel_lvl_" + mainLevelDef()];

    const heightFunc = () => {
      if (basicUser.status.statusType === "In-Game") {
        return 250;
      } else {
        return 127;
      }
    };

    const userNameFunc = (mystr: string) => {
      if (mystr.length > 16) {
        return mystr.substring(0, 13) + "...";
      } else {
        return mystr;
      }
    };

    return new ImageResponse(
      (
        <div className="card container" style={style.card}>
          <div style={style.user}>
            <div style={style.info}>
              <div
                style={{
                  ...style.imgSec,
                  ...(basicUser.status.statusType === "Online"
                    ? style.imgOnline
                    : basicUser.status.statusType === "In-Game"
                    ? style.imgInGame
                    : style.imgOffline),
                }}
              >
                <img
                  style={style.avatar}
                  src={basicUser.userInfo.avatar}
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 360,
        height: heightFunc(),
      }
    );
  } catch (e) {
    Response.json({ error: e }, { status: 500 });
  }
}
