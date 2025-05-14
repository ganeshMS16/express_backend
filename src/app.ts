import express from "express"
import userRouter from "./user/userRouter";

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message:"welcome to video streaming server..."
    })
})

app.use("/api/route",userRouter)


export default app;