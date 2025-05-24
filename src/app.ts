import express from "express"
import userRouter from "./user/userRouter";
import cors from "cors"

const app=express();
app.use(cors({
    origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//   allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}))
app.use(express.json());


app.get("/",(req,res)=>{
    res.json({
        message:"welcome to video streaming server..."
    })
})

app.use("/api/route",userRouter)


export default app;