import steamUser from "@/utils/steamUser";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "nodejs",
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { id } = request.query;
  if (!id) {
    response.status(401).json({ error: "No id provided" });
  }

  const getSteamHtlm = async(myid:string)=>{
    if(/^\d+$/.test(myid)){
      return await axios.get("https://steamcommunity.com/profiles/" + myid);
    }else{
      return await axios.get("https://steamcommunity.com/id/" + myid);
    }
  }

  const steamHtml = await getSteamHtlm(id as string);

  if (steamHtml.status !== 200) {
    response.status(401).json({ error: "Steam Profile not found" });
  }

  const steam = new steamUser(steamHtml.data);

  const basicProfile = steam.getBasicProfile();

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  response.status(200).json({
    basicUser: basicProfile,
  });
}
