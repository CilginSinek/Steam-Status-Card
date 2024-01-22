/* eslint-disable jsx-a11y/alt-text */
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
    <div className="avatarSec" style={style.avatarSec}>
      <img src='https://avatars.akamai.steamstatic.com/a691782e9df50a0a5052ba0edb8df5b1789906a0_full.jpg' alt='avatar' style={style.avatar} />
    </div>
  </div>
  )
}

export default CardPage