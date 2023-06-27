import dbConnect from "@/app/utils/conn";
import contact from "@/app/models/contact";
import {NextResponse} from "next/server";

export async function POST(req, res){
    try{
    const body = await req.json();
    await dbConnect();

    await contact.create(body);

    return NextResponse.json({
      message:"message send successfully"
    },{
      status:200,
    })
    
    }catch(e){
    return NextResponse.json({
       message : "server error"
    },{
       status : 500,
    })
    }
}