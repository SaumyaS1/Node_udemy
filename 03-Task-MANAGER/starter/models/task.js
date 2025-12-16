import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema({
    // name:String,
    name: {
        type:String,
        required:[true, 'must provide name'],
        trim:true,
        maxlength:[20,'must not exceed 20 characters']
    },
    completed:{
        type:Boolean,
        default:false   
    }
})

const TaskModel=mongoose.model('task',TaskSchema)         // task → collection name in db (auto-created)

export default TaskModel






// schema
// model --> queries perform
// export default model