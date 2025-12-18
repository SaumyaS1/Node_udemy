import express from "express";
// import connectDB from "./db/connect.js";
import dotenv from "dotenv"
import { notFound } from "./middleware/not-found.js";
import { errorHandler } from "./middleware/errorHandler.js";
import MainRoutes from "./routes/main.js";
dotenv.config();

const app=express()

// app.get('/',(req,res)=>{
//     res.send('JWT Basics')
// })

//middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', MainRoutes)

app.use(notFound)
app.use(errorHandler)

const port=process.env.PORT || 3000

const startServer=async()=>{
    try{
        // await connectDB();
        app.listen(port,()=>{
            console.log(`server is running at ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}
startServer();


