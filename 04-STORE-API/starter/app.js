import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connect.js"
import { notFound } from "./middleware/not-found.js"
import { errorHandler } from "./middleware/errorHandler.js"
import productRoutes from "./routes/product.js"

dotenv.config()

const app=express()

app.get('/',(req,res)=>{
    res.send('Store API')
})

app.use(express.json());


//route
app.use('/api/v1/products',productRoutes)

//Middlewares
app.use(notFound)
app.use(errorHandler)

const port=process.env.PORT || 3000
const startServer=async()=>{
    try{
        await connectDB()
        app.listen(port,()=>{
            console.log(`server is running on port ${port}`)
})
    }catch(error){
        console.log(error)
    }
}
startServer()


