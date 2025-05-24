import express from "express";
import createUser from "./userControllers";

const userRouter=express.Router();
console.log("userRouter is triggered")

userRouter.post("/registerUser",createUser)

export default userRouter;