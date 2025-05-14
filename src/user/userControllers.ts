import { Request, Response } from "express";
import userModel from "../models/userModel";
import bcrypt from "bcrypt" 
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser =async (req:Request,res:Response)=>{
        console.log(req.body)
        const {name,email,password}=req.body;
// validation
    if(!name || !email || !password){
        console.log("fields missing")
        return;
    }
    // database call
    const user=await userModel.findOne({email:email});
    if(user){
        console.log("user already present");
        return
    }
// password hash
const hashSalt=10;
const hashPassword=await bcrypt.hash(password,hashSalt);


// store user data

const newUser=await userModel.create({
    name,
    email,
    password:hashPassword
})
// token generation
const accessToken=sign({sub:newUser._id},config.hashPass as string)
// return the response
res.json({
    accessToken:accessToken
})
}

export default createUser;