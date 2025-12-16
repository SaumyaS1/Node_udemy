import mongoose from "mongoose";
// import dotenv from "dotenv"

// dotenv.config(); // Loads .env variables

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)  //school → database name (auto-created if it doesn’t exist)
        console.log('connection successfull')
        // const schema= mongoose.Schema({
        //     name:String,
        //     age:Number
        // })
        // const studentsModel=mongoose.model('students',schema)  //the collection will be named students in the dbq
        // const result=studentsModel.find()
        // console.log(result)
    }catch(error){
        console.error("connection failed:",error.message);
        process.exit(1);     //your app stops if DB fails
        
    }

}
export default connectDB







//mongoose.connect(URI)
//schema
//model