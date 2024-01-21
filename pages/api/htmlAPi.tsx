import steamUser from '@/utils/steamUser';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
  ) {
    const { id } = request.query;
    if(!id) {
      response.status(401).json({ error: 'No id provided'});;
    }

    const steamHtml = await axios.get("https://steamcommunity.com/id/"+id)

    if(steamHtml.status){
      response.status(401).json({ error: 'Steam Profile not found'});
    }

    const steam = new steamUser(steamHtml.data);

    const basicProfile = steam.getBasicProfile();

    response.status(200).json({
      basicUser: basicProfile
    });
}