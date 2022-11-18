let Userid = "";
// Ur own steam id64
let webkey = ""
// ur own steam web api key
const sumaryUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${webkey}&steamids=${Userid}`
const badgeUrl =`https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${webkey}&steamid=${Userid}`



import fetch from 'node-fetch';
import cors from 'cors';

let Summaryfetch = await fetch(sumaryUrl, cors());
console.log(Summaryfetch)