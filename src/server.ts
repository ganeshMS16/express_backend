import app from "./app";
import {config} from "./config/config"
import connectDb from "./config/db";

const runServer=async ()=>{
    
    await connectDb();


    const port=config.port || 3000
    app.listen(port,()=>{
        console.log(`server listening port : ${port}`)
    })
}

runServer()