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

  const steamHtml = await axios.get("https://steamcommunity.com/id/" + id);

  if (steamHtml.status !== 200) {
    response.status(401).json({ error: "Steam Profile not found" });
  }

  const steam = new steamUser(steamHtml.data);

  const basicProfile = steam.getBasicProfile();

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  response.status(200).json({
    basicUser: basicProfile,
  });
}
