/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import style from "@/styles/style";
import { basicUserInfo } from "@/utils/types";

export const runtime = "edge";

export default async function handler(req: NextRequest) {
  try{
    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");
    const costumeComponent = searchParams.get("costume");
  
    if (!id) {
      return new ImageResponse(<>{'Visit with "?id=vercel"'}</>, {
        width: 1200,
        height: 630,
      });
    }
  
    const steamData = await fetch(process.env.URL + "/api/htmlAPi?id=" + id, {
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
          <div className="user" style={style.user}>
            <div className="info" style={style.info}>
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
                  className="avatar"
                  style={style.avatar}
                  src={basicUser.userInfo.avatar}
                  alt="Avatar"
                />
              </div>
              <div className="nameSec" style={style.nameSec}>
                <h2
                  style={{
                    ...(basicUser.status.statusType === "Online"
                      ? style.online
                      : basicUser.status.statusType === "In-Game"
                      ? style.inGame
                      : style.offline),
                    ...style.h2,
                  }}
                >
                  {userNameFunc(basicUser.userInfo.nickname)}
                </h2>
                <p
                  className="inGame status"
                  style={{
                    ...style.p,
                    ...style.status,
                    ...(basicUser.status.statusType === "Online"
                      ? style.online
                      : basicUser.status.statusType === "In-Game"
                      ? style.inGame
                      : style.offline),
                  }}
                >
                  {basicUser.status.statusText}
                </p>
                {typeof basicUser.status.statusGame == "string" && (
                  <p
                    className="inGame status"
                    style={{ ...style.status, ...style.p, ...style.inGame }}
                  >
                    {basicUser.status.statusGame}
                  </p>
                )}
              </div>
            </div>
            <div className="badgeSec" style={style.badgeSec}>
              <div
                className="friendPlayerLevel lvl_20"
                style={{ ...style.friendPlayerLevel, ...levelClass }}
              >
                <span className="LevelNumb" style={style.LevelNumb}>
                  {basicUser.userInfo.level}
                </span>
              </div>
              <span>
                {/* <img
                  className="MainBadge"
                  style={style.MainBadge}
                  src={
                    basicUser.userInfo.mainBadge
                      ? basicUser.userInfo.mainBadge.iconLink
                      : "https://static.thenounproject.com/png/1738131-200.png"
                  }
                  alt="MainBadge"
                /> */}
              </span>
            </div>
          </div>
          {basicUser.status.statusGame &&
            typeof basicUser.status.statusGame != "string" && (
              <>
                <div className="hr" style={style.hr}></div>
                <div
                  className={"game " + !costumeComponent && "vanilia"}
                  style={{
                    ...style.game,
                    ...(!costumeComponent && style.vanilia),
                  }}
                >
                  <img
                    style={style.gameImg}
                    className="gameImg"
                    src={basicUser.status.statusGame.iconLink}
                    alt="gameIcon"
                  />
                  <div style={{ display: "flex" }}>
                    <h4
                      style={{
                        ...style.inGame,
                        ...style.status,
                        ...style.game,
                        ...style.h4,
                      }}
                    >
                      {basicUser.status.statusGame.name}
                    </h4>
                  </div>
                </div>
              </>
            )}
        </div>
      ),
      {
        width: 360,
        height: heightFunc(),
      }
    );
  }catch(e){
    Response.json({error:e})
  }

}
