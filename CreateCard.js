let summary = await fetch("http://localhost:3000/mysteamsumaryDONTGETTHAT")
.then(res => res.json())
.then(data => {
    return data
});
let level = await fetch("http://localhost:3000/mysteamlevelapiDONTGETTHAT")
.then(res => res.json())
.then(data => {
    return data

});
console.log(summary)
console.log(level)





function createAcard(userdata, leveldata) {

    //all card elements

    var firstdiv = document.createElement('div'),

        firstdivleftarea = document.createElement('div'),
        avatarcolorarea = document.createElement('div'),
        avatararea = document.createElement('div'),
            avatarimg = document.createElement('img'),

        firstdivmidarea = document.createElement('div'),
        nickarea = document.createElement('div'),
            usernick = document.createElement('div'),

        firstdivrightarea = document.createElement('div'),
        levelarea = document.createElement('div'),
            leveltext = document.createElement('div'),
            levelcircle = document.createElement('div'),
                levelcirclein = document.createElement('div'),
        badgearea = document.createElement('div'),
        isActive = document.createElement('div');


    firstdiv.classList.add("first")
    
    const ilkdiv = document.querySelector("#ilkdiv");
    
    ilkdiv.appendChild(firstdiv);

    firstdiv.appendChild(firstdivleftarea);
        firstdivleftarea.classList.add("firstleft");
    firstdiv.appendChild(firstdivmidarea);
        firstdivmidarea.classList.add("firstmid");
    firstdiv.appendChild(firstdivrightarea);
        firstdivrightarea.classList.add("firstright");

    firstdivleftarea.appendChild(avatarcolorarea);
    avatarcolorarea.appendChild(avatararea);
        avatararea.classList.add("area")
    avatararea.appendChild(avatarimg);

    firstdivmidarea.appendChild(nickarea);
    nickarea.appendChild(usernick);

    firstdivrightarea.appendChild(levelarea);
        levelarea.appendChild(leveltext);
        levelarea.appendChild(levelcircle);
            levelcircle.appendChild(levelcirclein);
    firstdivrightarea.appendChild(badgearea);
    firstdivrightarea.appendChild(isActive);
    //firstdiv left area

    //avatar border colors
    switch (userdata.response.players[0].personastate) {
        case 0:
            avatararea.classList.add('OfflineColor');
            break;
        case 1:
            if (userdata.response.players.gameextrainfo) {
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

    //firstdiv Mid area

    usernick.textContent = `${userdata.response.players[0].personaname}`
    usernick.classList.add("UserNick")


    //firstdiv right area


    // level
    leveltext.textContent = "Level"
    levelcirclein.textContent = `${leveldata.response.player_level}`
    levelcircle.classList.add("circleCSS")
    levelcirclein.classList.add("circle")
    leveltext.classList.add("leveltext")
    levelarea.classList.add("levelarea")
    //first digit of level
    const firstdigitlevel = String(leveldata.response.player_level);
    switch (firstdigitlevel){
        case 0:
            levelcircle.classList.add("greycolor");
            break;
        case 1:
            levelcircle.classList.add("redcolor");
            break;
        case 2:
            levelcircle.classList.add("orangecolor");
            break;
        case 3:
            levelcircle.classList.add("yellowcolor");
            break;
        case 4:
            levelcircle.classList.add("greencolor");
            break;
        case 5:
            levelcircle.classList.add("bluecolor");
            break;
        case 6:
            levelcircle.classList.add("purplecolor");
            break;
        case 7:
            levelcircle.classList.add("pinkcolor");
            break;
        case 8:
            levelcircle.classList.add("browncolor");
            break;
        case 9:
            levelcircle.classList.add("lightbrowncolor");
    };

    //status text

    if(userdata.response.players.personastate ==!0){
        if(userdata.response.players[0].gameextrainfo){
            isActive.textContent = `Currently In-Game <br /> ${userdata.response.players[0].gameextrainfo}`
            isActive.classList.add("yellowcolor")
        }
        else{
            isActive.textContent = `Currently Online`
        }
    }
    else{
        isActive.textContent = `Currently Offline`
    }

}

createAcard(summary, level);