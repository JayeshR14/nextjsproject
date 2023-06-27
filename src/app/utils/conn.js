require('dotenv').config;
import mongoose from 'mongoose';

const MONGODB_URL = "mongodb+srv://jayeshdhundhalva888:mHNgDJkAyUiuP104@cluster0.q8h2ftj.mongodb.net/userdata?retryWrites=true&w=majority";

if(!MONGODB_URL){
    throw new Error("please define variable inside .env.local")
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {con:null, promise:null}
}

const dbConnect = async() => {
    if(cached.conn){
       return cached.conn;
    }
    if(!cached.promise){
        const opt = {
            bufferCommands : false,
        };
        cached.promise = mongoose.connect(MONGODB_URL, opt).then((mongoose)=>{
               return mongoose;
        })
    }
    try{
      cached.conn = await cached.promise;
    }catch(e){
      cached.promise = null;
      throw e;
    }
   return cached.conn;
}
export default dbConnect;