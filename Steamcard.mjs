let Userid = "";
// Ur own steam id64
let webkey = ""
// ur own steam web api key
const sumaryUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${webkey}&steamids=${Userid}`
const badgeUrl =`https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${webkey}&steamid=${Userid}`


// var mypromise = new Promise((resolve, reject) => {
//     fetch(userUrl)
//         .then((response) => response.json())
//         .then(function (items) {
//             items.foreach((item) => {
//                 console.log(item)
//             })
//         }).catch((err) => {console.log(err)})
// })
import express, { response } from 'express';
const app = express();
import fetch from 'node-fetch';
import cors from 'cors';

app.use(cors())
// get summary
app.get("/mysteamsumaryDONTGETTHAT", async (req, res) => {
    const response = await fetch(sumaryUrl);
    res.json(await response.json())
})
//get badge
app.get("/mysteamlevelapiDONTGETTHAT", async (req, res) =>{
    const response = await fetch(badgeUrl);
    res.json(await response.json())
})

app.listen(3000)
