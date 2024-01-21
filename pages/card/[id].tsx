/* eslint-disable @next/next/no-img-element */
import React from 'react'
import steamUser from '@/utils/steamUser';
import style from '@/styles/style';

function CardPage() {

  const [basicUser,setBasicUser] = React.useState({
    status: {
      statusType: "In-Game",
      statusGame: {
        name: 'Super Hexagon',
        appid: 221640,  
        iconLink: 'https://cdn.cloudflare.steamstatic.com/steam/apps/221640/capsule_184x69.jpg?t=1653925774',
        playtime_forever: '17.1 hrs on record\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCurrently In-Game',
        last_play: undefined,
        badge: {
        name: 'Hexagon',
        iconLink: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/221640/58d721e7a48e188c2dc48edf27e59c68c2d3a150.png',
        xp: '100 XP'
      },
        achievements: '5 of 6'
      },
      statusText: "Currently In-Game",
    },
    userInfo: {
      nickname: "Azgin Sinek",
      avatar:
        "https://avatars.akamai.steamstatic.com/a691782e9df50a0a5052ba0edb8df5b1789906a0_full.jpg",
      mainBadge: {
        name: "Fransformation.",
        iconLink:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/362680/03449c0e8bbfd7a9b1fca6a8ecfd9a1da4f6e43c.png",
        xp: "100 XP",
      },
      level: 24,
    }
  } as any);


  const levelClass = style["friendPlayerLevel_lvl_" + Math.floor(basicUser.userInfo.level / 10) * 10];

  return (
    <div className="card container" style={style.card}>
    <div className="user" style={style.user}>
        <div className="info" style={style.info}>
            <div style={{...style.imgSec, ...(basicUser.status.statusType === "Online" ? style.imgOnline : basicUser.status.statusType === "In-Game" ? style.imgInGame : style.imgOffline)}}>
                <img className="avatar" style={style.avatar} src={basicUser.userInfo.avatar} alt="Avatar"/>
            </div>
            <div className="nameSec" style={style.nameSec}>
                <h2 style={{...(basicUser.status.statusType === "Online" ? style.online : basicUser.status.statusType === "In-Game" ? style.inGame : style.offline), ...style.h2}}>{basicUser.userInfo.nickname}</h2>
                <p className="inGame status" style={{...style.p,...style.status, ...(basicUser.status.statusType === "Online" ? style.online : basicUser.status.statusType === "In-Game" ? style.inGame : style.offline)}}>{basicUser.status.statusText}</p>
                {/* {typeof basicUser.status.statusGame == "string" && (
                  <p className="inGame status" style={{...style.status,...style.p, ...style.inGame}}>{basicUser.status.statusGame}</p>
                )} */}
            </div>
        </div>
        <div className="badgeSec" style={style.badgeSec} >
            <div className="friendPlayerLevel lvl_20" style={{...style.friendPlayerLevel, ...levelClass}} >
                <span className="LevelNumb" style={style.LevelNumb} >{basicUser.userInfo.level}</span>
            </div>
            <span>
                <img className="MainBadge" style={style.MainBadge} src={basicUser.userInfo.mainBadge ? basicUser.userInfo.mainBadge.iconLink : "https://static.thenounproject.com/png/1738131-200.png"} alt="MainBadge"/>
            </span>
        </div>
    </div>
    {/* {basicUser.status.statusGame && typeof basicUser.status.statusGame != "string" && (
      <>
        <div className="hr"></div>
          <div className={"game vanilia" + !costumeComponent && "vanilia"}>
            <img className="gameImg" src={basicUser.status.statusGame.iconLink} alt="gameIcon"/>
            <div className="gameInfo">
              <h4 className="inGame status game">Super Hexagon</h4>
            </div>
          </div>
      </>
    )} */}

</div>
  )
}

export default CardPage