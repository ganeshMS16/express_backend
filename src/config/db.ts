import mongoose from "mongoose";
import { config } from "./config";

const connectDb=async ()=>{
    try{
        mongoose.connection.on("connected",()=>{
            console.log("Mongo Db connected");
        })

        mongoose.connection.on("error",(err)=>{
            console.log("mongo db connection failed" + err)
        })

        await mongoose.connect(config.mongoDbConnection as string)
    }catch(error){
        console.log("error connecting to mongo db :" + error)
        process.exit(1)
    }
}

export default connectDb;
