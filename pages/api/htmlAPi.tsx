import { NextRequest,NextResponse } from "next/server";
import steamUser from "@/utils/steamUser";
import axios from "axios";

export const maxDuration = 13; 
export const runtime = "nodejs";

export default async function GET(request: NextRequest) {
    try{
        const { searchParams } = request.nextUrl;
        const id = searchParams.get("id");
    
        // const steamHtml = await fetch(`https://steamcommunity.com/id/${id}`).catch(er=>{
        //     console.error(er)
        //     throw er;
        // });

        // if (steamHtml.status !== 200) {
        //     throw new Error("Steam html not found in fetch");
        // }

        // const htmlData = await steamHtml.text();

        // const steam = new steamUser(htmlData);

        // const basicUser = steam.getBasicProfile();

        return NextResponse.json({
            id:id
        },{
            status:200
        })
    }catch(err){
        return NextResponse.json({error:err})
    }
}