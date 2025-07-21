import express, { response } from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
dotenv.config()
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB.js';
import userRouter from './route/user.route.js';

const app=express()
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginEmbedderPolicy :false
}))

const PORT =8080 || process.env.PORT

app.get("/",(request ,response)=>{
    ///server to client
    response.json({
        message: "sever is running " +PORT
    })
})


app.use('/api/user',userRouter)

connectDB().then(()=>{
    
    app.listen(PORT,()=>{
        console.log("server is running on", PORT)
    })

})




