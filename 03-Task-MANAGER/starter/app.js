import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connect.js"
import { notFound } from "./middleware/not-found.js"
import { errorHandler } from "./middleware/errorHandler.js"

dotenv.config()

const app=express()

//import routers
import taskRoutes from "./routes/task.js"


//routes
app.get('/',(req,res)=>{
    res.send("hello page")
})

//middleware
app.use(express.static('./public.js'))
app.use(express.json())       // req.body ,converts incoming JSON into JavaScript objects,
                              //POST / PUT / PATCH requests,  

//Routes
app.use('/api/v1/tasks',taskRoutes)         // taskRoutes-> any name given by me

//app.get('/api/v1/tasks')         - get all tasks
//app.post('/api/v1/tasks')        - create a new task
//app.get('/api/v1/tasks/:id')     - get single task
//app.patch('/api/v1/tasks/:id')   - update task
//app.delete('/api/v1/tasks/:id')  - delete task

app.use(notFound)
app.use(errorHandler)

const port= process.env.PORT || 3000      //$env:PORT = 5000; node app.js  -->run command

const startServer=async()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`server is running on ${port}`)
})       
    }catch(error){
        console.log(error)
    }
}
startServer()          //invoke function

