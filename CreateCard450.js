let Userid = "";
// Ur own steam id64
let webkey = ""
// ur own steam web api key

// URLS
const sumaryUrl = `https://corsproxy.io/?https%3A%2F%2Fapi.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${webkey}&steamids=${Userid}`
const badgeUrl =`https://corsproxy.io/?https%3A%2F%2Fapi.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${webkey}&steamid=${Userid}`

const gamesURL = `https://corsproxy.io/?https%3A%2F%2Fapi.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${webkey}&format=json&steamid=${Userid}&include_appinfo=1`

// FETCHS

let summary = await fetch(sumaryUrl).then(res => res.json()).then(data => {return data});
let level = await fetch(badgeUrl).then(res => res.json()).then(data => {return data});
let mygame = await fetch(gamesURL).then(res => res.json()).then(data => {return data});

// FUNCTION

function createAcard(userdata, leveldata, games) {

    //all card elements

    var firstdiv = document.createElement('div'),

        //for 400width
        middivarea = document.createElement('div'),


        firstdivleftarea = document.createElement('div'),
        avatarcolorarea = document.createElement('div'),
        avatararea = document.createElement('div'),
            avatarimg = document.createElement('img'),

        firstdivmidarea = document.createElement('div'),
        statusarea = document.createElement('div'),
        nickarea = document.createElement('div'),
            usernick = document.createElement('div'),

        firstdivrightarea = document.createElement('div'),
        levelarea = document.createElement('div'),
            leveltext = document.createElement('div'),
            levelcircle = document.createElement('div'),
                levelcirclein = document.createElement('div'),
                    levelcircletext = document.createElement('div'),
        badgearea = document.createElement('img'),
        isActive = document.createElement('div');


    // appends and add class

    firstdiv.classList.add("first")
    
    const ilkdiv = document.querySelector(".Steamcard");
    
    ilkdiv.appendChild(firstdiv);

    // MAIN DIVS

    firstdiv.appendChild(firstdivleftarea);
        firstdivleftarea.classList.add("firstleft");
    firstdiv.appendChild(middivarea);
        middivarea.classList.add("midarea400")

    middivarea.appendChild(firstdivmidarea);
        firstdivmidarea.classList.add("firstmid");
    middivarea.appendChild(firstdivrightarea);
        firstdivrightarea.classList.add("firstright");
    

        //LEFT DIVS
    firstdivleftarea.appendChild(avatarcolorarea);
    avatarcolorarea.appendChild(avatararea);
        avatararea.classList.add("area");
    avatararea.appendChild(avatarimg);

        //MID DIVS

    firstdivmidarea.appendChild(nickarea);
    nickarea.appendChild(usernick);

        //RIGHT DIVS

    firstdivrightarea.appendChild(levelarea);
        levelarea.appendChild(leveltext);
        levelarea.appendChild(levelcircle);
            levelcircle.appendChild(levelcirclein);
                levelcirclein.appendChild(levelcircletext);
    firstdivrightarea.appendChild(statusarea);
        statusarea.classList.add("statusarea");
    statusarea.appendChild(badgearea);
    statusarea.appendChild(isActive);

    //firstdiv left area

    //avatar border colors
    switch (userdata.response.players[0].personastate) {
        case 0:
            avatararea.classList.add('OfflineColor');
            break;
        case 1:
            if (userdata.response.players[0].gameextrainfo) {
                avatararea.classList.add('lookingToPlayColor');
            } else {
                avatararea.classList.add('OnlineColor');
            };
            break;
        case 2:
            avatararea.classList.add('BusyColor');
            break;
        case 3:
            avatararea.classList.add('AwayColor');
            break;
        case 4:
            avatararea.classList.add('SnoozeColor');
            break;
        case 5:
            avatararea.classList.add('lookingtoTradeColor');
            break;
        case 6:
            avatararea.classList.add('lookingToPlayColor');
    };

    //avatar img
    var newImg = new Image();
    newImg.onload = function () {
        avatarimg.src = this.src;
    }
    newImg.src = userdata.response.players[0].avatarfull;

    avatarimg.classList.add('avatarCSS')
    
    //firstdiv Mid area

    usernick.textContent = `${userdata.response.players[0].personaname}`
    usernick.classList.add("UserNick")


    //firstdiv right area


    // level

    leveltext.textContent = "Level";
    levelcircletext.textContent = `${leveldata.response.player_level}`;
    levelcircle.classList.add("circleCSS");
    levelcirclein.classList.add("circle");
    levelcircletext.classList.add("circletext");
    leveltext.classList.add("leveltext");
    levelarea.classList.add("levelarea");

    //first digit of level

    const firstdigitlevel = String(leveldata.response.player_level)[0];
    switch (parseInt(firstdigitlevel)){
        case 0:
            levelcircle.classList.add('color0');
            break;
        case 1:
            levelcircle.classList.add('color1');
            break;
        case 2:
            levelcircle.classList.add('color2');
            break;
        case 3:
            levelcircle.classList.add('color3');
            break;
        case 4:
            levelcircle.classList.add('color4');
            break;
        case 5:
            levelcircle.classList.add('color5');
            break;
        case 6:
            levelcircle.classList.add('color6');
            break;
        case 7:
            levelcircle.classList.add('color7');
            break;
        case 8:
            levelcircle.classList.add('color8');
            break;
        case 9:
            levelcircle.classList.add('color9');
    };

    //status text

    if(userdata.response.players[0].personastate ==!0){
        if(userdata.response.players[0].gameextrainfo){
            isActive.textContent = `Currently In-Game ${userdata.response.players[0].gameextrainfo}`
            isActive.classList.add("game-text-color")


            badgearea.classList.add('gameimg');

            let filted = games.response.games.filter(function(el){
                return el.appid == userdata.response.players[0].gameid
            })

            var GameIcon = new Image();
            GameIcon.onload = function () {
                badgearea.src = this.src;
            }
            if(filted[0].img_icon_url){
                GameIcon.src = `http://media.steampowered.com/steamcommunity/public/images/apps/${filted[0].appid}/${filted[0].img_icon_url}.jpg`;
            } else if(filted[0].img_logo_url){
                GameIcon.src = `http://media.steampowered.com/steamcommunity/public/images/apps/${filted[0].appid}/${filted[0].img_logo_url}.jpg`;
            } else{
                GameIcon.src = `https://github.com/CilginSinek/Steam-Status-Card/blob/UnExpress/%C4%B0mages/UngameStatusimage.png`;
            }

            // Change Gap
            firstdiv.style.gap = "10px"

        }
        else{
            isActive.textContent = `Currently Online`
            isActive.classList.add("blue-text-color")
        }
    }else if(userdata.response.players[0].personastate == 3){
        isActive.textContent = "Currently Idle"
        isActive.classList.add("Idle-Text-Color")
    }else{
        isActive.textContent = `Currently Offline`
    }

}

createAcard(summary, level, mygame);