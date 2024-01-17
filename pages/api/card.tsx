import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import steamUser from "@/utils/steamUser";
import BasicCard from "@/components/basicCard";
import Image from "next/image";
// import "../../styles/index.css";

export const runtime = "edge";

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const username = searchParams.get("username");

  if (!username) {
    return new ImageResponse(<>{'Visit with "?username=vercel"'}</>, {
      width: 1200,
      height: 630,
    });
  }
  const steamUrl = `https://steamcommunity.com/id/${username}`;
  const steamHtml = await fetch(steamUrl);

  if (steamHtml.status !== 200) {
    return new ImageResponse(<div>Error</div>);
  }

  const htmlData = await steamHtml.text();

  const steam = new steamUser(htmlData);

  const basicUser = steam.getBasicProfile();

  return new ImageResponse(
    (
      <div id="card"  style={{ backgroundColor: "#1a1d1e",display: "flex", flexDirection: "column", justifyContent: "center",borderRadius: "10px",width: "360px"}}>
        <div id="user" style={{display: "flex",flexDirection: "row",flexWrap: "nowrap",justifyContent: "center",padding: "20px 0px 20px 0px",gap: "15px"}} >
          <div id="info" style={{display: "flex",flexDirection: "row",flexWrap: "nowrap",justifyContent: "center",padding: "20px 0px 20px 0px",gap: "15px"}} >
            <div id="imgSec" style={{width:"85px",height:"87px",backgroundColor: basicUser.status.statusType == "Online" ? "#5da7c4" : basicUser.status.statusType == "In-Game" ? "#9abe3b" : "#b4b4b5"}} >
              <Image id="avatar" style={{width:"85px",height:"85px", display:"flex"}} src={basicUser.userInfo.avatar} alt="Avatar"/>
            </div>

          </div>
          <div id="badgeSec">

          </div>
        </div>
        {basicUser.status.statusGame && (
          <div> {typeof basicUser.status.statusGame =="string" && <p style={{color:"white"}}>{basicUser.status.statusGame}</p>} </div>
        )

        }
      </div>
    ),
    {
      width: 360,
    }
  );
}
