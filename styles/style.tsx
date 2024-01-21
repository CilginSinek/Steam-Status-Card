import {CSSProperties} from "react";

interface CSS {
  [key: string]: CSSProperties
}

const style: CSS = {
    "card": {
      "fontFamily": "'Open Sans', sans-serif",
      "backgroundColor": "#1a1d1e",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "center",
      "borderRadius": "10px",
      "width": "360px"
    },
    "status": {
      "maxWidth": "150px"
    },
    "user": {
      "display": "flex",
      "flexDirection": "row",
      "flexWrap": "nowrap",
      "justifyContent": "center",
      "padding": "20px 0px 20px 0px",
      "gap": "15px"
    },
    "info": {
      "display": "flex",
      "flexDirection": "row",
      "alignItems": "center",
      "gap": "10px"
    },
    "MainBadgeName": {
      "color": "#5da7c4"
    },
    "nameSec": {
      "display": "flex",
      "flexDirection": "column",
      "alignItems": "flex-start",
      "justifyContent": "space-around",
      "gap": "10px"
    },
    "p": {
      "fontSize": "14px",
      "padding": "0",
      "margin":"0"
    },
    "imgSec": {
      "display": "flex",
      "width": "85px",
      "height": "87px"
    },
    "imgOnline": {
      "backgroundColor": "#5da7c4"
    },
    "imgOffline": {
      "backgroundColor": "#b4b4b5"
    },
    "imgInGame": {
      "backgroundColor": "#9abe3b"
    },
    "online": {
      "color": "#5da7c4"
    },
    "offline": {
      "color": "#b4b4b5"
    },
    "inGame": {
      "color": "#9abe3b"
    },
    "avatar": {
      "width": "85px",
      "height": "85px"
    },
    "MainBadge": {
      "width": "35px",
      "height": "35px"
    },
    "badgeSec": {
      "display": "flex",
      "flexDirection": "row-reverse",
      "alignItems": "flex-start",
      "justifyContent": "center",
      "marginTop": "10px",
      "gap": "10px"
    },
    "game": {
      "display": "flex",
      "justifyContent": "flex-start",
      "alignItems": "center",
      "flexWrap": "nowrap",
      "backgroundColor": "#303237",
      "width":"100%",
      "padding": "15px 20px"
    },
    "vanilia": {
      "borderRadius": "0px 0px 10px 10px"
    },
    "gameImg": {
      "width": "110px"
    },
    "h4": {
      "margin": "0px",
      "fontSize": "15px",
      "width":"250px",
    },
    "h2": {
      "margin": "0px",
      "padding": "0px",
      "fontSize": "18px"
    },
    "hr": {
      "border": "1px solid #303237"
    },
    "recentGames": {
      "display": "flex",
      "padding": "10px 10px",
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "flex-start",
      "flexWrap": "nowrap",
      "gap": "5px"
    },
    "recent": {
      "width": "110px"
    },
    "costumeHeader": {
      "color": "#e0e0e0"
    },
    "LevelNumb": {
      "color": "#fff"
    },
    "friendPlayerLevel": {
      "display": "flex",
      "alignContent": "center",
      "justifyContent": "center",
      "alignItems": "center",
      "fontSize": "17px",
      "borderRadius": "50%",
      "border": "solid #fff 2px",
      "height": "30px",
      "width": "30px",
      "textAlign": "center",
      "cursor": "default"
    },
    "friendPlayerLevel_lvl_0": {
      "borderColor": "#9b9b9b"
    },
    "friendPlayerLevel_lvl_10": {
      "borderColor": "#c02942"
    },
    "friendPlayerLevel_lvl_20": {
      "borderColor": "#d95b43"
    },
    "friendPlayerLevel_lvl_30": {
      "borderColor": "#fecc23"
    },
    "friendPlayerLevel_lvl_40": {
      "borderColor": "#467a3c"
    },
    "friendPlayerLevel_lvl_50": {
      "borderColor": "#4e8ddb"
    },
    "friendPlayerLevel_lvl_60": {
      "borderColor": "#7652c9"
    },
    "friendPlayerLevel_lvl_70": {
      "borderColor": "#c252c9"
    },
    "friendPlayerLevel_lvl_80": {
      "borderColor": "#542437"
    },
    "friendPlayerLevel_lvl_90": {
      "borderColor": "#997c52"
    },
    "friendPlayerLevel_lvl_100": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_hexagons.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_200": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_shields.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_300": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_books.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_400": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_chevrons.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_500": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_circle2.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_600": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_angle.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_700": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_flag.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_800": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_wings.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_900": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_arrows.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1000": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_crystals.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1100": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_space.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1200": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_waterelement.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1300": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_fireelement.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1400": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_earthelement.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1500": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_airelement_1-2.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1600": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_airelement_3-4.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1700": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_airelement_5-6.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1800": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_airelement_7-8.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_1900": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_airelement_9-10.png\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2000": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_geo_1-2.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2100": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_geo_3-4.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2200": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_geo_5-6.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2300": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_geo_7-8.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2400": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_geo_9-10.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2500": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_mandala_1-2.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2600": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_mandala_3-4.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2700": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_mandala_5-6.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2800": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_mandala_7-8.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_2900": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_mandala_9-10.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3000": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_spiro_1-2.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3100": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_spiro_3-4.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3200": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_spiro_5-6.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3300": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_spiro_7-8.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3400": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_spiro_9-10.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3500": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_patterns_1-2.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3600": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_patterns_3-4.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3700": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_patterns_5-6.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3800": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_patterns_7-8.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_3900": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_patterns_9-10.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4000": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_shapes_1.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4100": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_shapes_2.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4200": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_shapes_3.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4300": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_shapes_4.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4400": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_shapes_5.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4500": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_grunge_1.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4600": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_grunge_2.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4700": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_grunge_3.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4800": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_grunge_4.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_4900": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_grunge_5.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_5000": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_halftone_1.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_5100": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_halftone_2.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_5200": {
      "backgroundImage": "url(\"https://steamcommunity-a.akamaihd.net/public/shared/images/community/levels_halftone_3.png?v=2\")",
      "border": "none",
      "borderRadius": "0",
      "backgroundRepeat": "no-repeat",
      "backgroundPosition": "0 0",
      "fontSize": "14px",
      "height": "32px",
      "width": "32px",
      "lineHeight": "32px",
      "textShadow": "1px 1px #1a1a1a"
    },
    "friendPlayerLevel_lvl_plus_10": {
      "backgroundPosition": "0 -32px"
    },
    "friendPlayerLevel_lvl_plus_20": {
      "backgroundPosition": "0 -64px"
    },
    "friendPlayerLevel_lvl_plus_30": {
      "backgroundPosition": "0 -96px"
    },
    "friendPlayerLevel_lvl_plus_40": {
      "backgroundPosition": "0 -128px"
    },
    "friendPlayerLevel_lvl_plus_50": {
      "backgroundPosition": "0 -160px"
    },
    "friendPlayerLevel_lvl_plus_60": {
      "backgroundPosition": "0 -192px"
    },
    "friendPlayerLevel_lvl_plus_70": {
      "backgroundPosition": "0 -224px"
    },
    "friendPlayerLevel_lvl_plus_80": {
      "backgroundPosition": "0 -256px"
    },
    "friendPlayerLevel_lvl_plus_90": {
      "backgroundPosition": "0 -288px"
    }
}
export default style;