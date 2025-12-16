import TaskModel from "../models/task.js"
import { asyncWrapper } from "../middleware/asyncWrapper.js"

export const getAllTask=async(req,res)=>{
    try{
        const result=await TaskModel.find()
        // res.status(200).json({result})
        // res.status(200).json({result,amount:results.length})
        res.status(200).json({status:'success',data:{result,nbHits:result.length}})

    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

export const createTask=async (req,res)=>{
    try {
        const result = await TaskModel.create(req.body);   //POST body
        res.status(201).json({ result });
    } catch (error) {
        // Check if it's a Mongoose validation error
        // if (error.name === "ValidationError") {
        //     const messages = Object.values(error.errors).map(val => val.message);
        //     return res.status(400).json({ errors: messages });
        // }
        res.status(500).json({ msg:error});
    }   
}         

//single task
export const getTask=async(req,res)=>{
    try{
        const{id}=req.params         // extract task id from URL
    const task= await TaskModel.findById(id)

    if (!task){
        return res.status(404).json({msg:`No task with id:${id}`})
    }
    res.status(200).json({task})

    }catch(error){
        res.status(500).json({msg:error})
    }
    
}

export const updateTask=async(req,res)=>{
    try{
        const {id}=req.params
        const task=await TaskModel.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        })
        if (!task){
            return res.status(404).json({msg:`No task with id:${id}`})
        }
        res.status(200).json({msg:"task updated successfully",task})
        }catch(error){
            res.status(500).json({msg:error})
        }
}

export const deleteTask=async(req,res)=>{
    try{
        const{id}=req.params
        const task=await TaskModel.findByIdAndDelete(id)
        if (!task){
            return res.status(404).json({msg:`No task with id:${id}`})
        }
        res.status(200).json({msg:"task deleted successfully",task})
    }catch(error){
        res.status(500).json({msg:error})
    }

}

 




// creteTask, updateTask --> TaskModel.query(req.body)     --> POST/Patch