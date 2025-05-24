import { Request, Response } from "express";
import userModel from "../models/userModel";
import bcrypt from "bcrypt" 
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser =async (req:Request,res:Response)=>{
        console.log(req.body)
        const {firstName,lastName,email,password}=req.body;
// validation
    if(!firstName || !lastName || !email || !password){
        console.log("fields missing")
        return;
    }
    // database call
    const user=await userModel.findOne({email});
    if(user){
        console.log("user already present");
        res.status(400).json({error:"user already present"})
    }
// password hash
const hashSalt=10;
const hashPassword=await bcrypt.hash(password,hashSalt);


// store user data

const newUser=await userModel.create({
    firstName,
    lastName,
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