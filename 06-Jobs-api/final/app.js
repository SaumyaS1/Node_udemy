import express from 'express'
import notFound from './middleware/not-found.js'
import errorHandler from './middleware/errorHandler.js'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
dotenv.config()


import authRoutes from './routes/auth.js'
import jobRoutes from './routes/jobs.js'

const app=express()

app.get('/',(req,res)=>{
    res.send('Jobs Api')
})


app.use(express.static('./public'))   //pjre
app.use(express.json())

//route
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/jobs', jobRoutes)



//middleware
app.use(notFound)
app.use(errorHandler)

const port= process.env.PORT || 3000

const startServer=async()=>{
    try{
        await connectDB()
        app.listen(port,()=>{
            console.log(`server is running at ${port}`);   
})
    }catch(error){
        console.log(error);
        
    }
}
startServer()
