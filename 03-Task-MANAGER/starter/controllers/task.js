import TaskModel from "../models/task.js"
import { asyncWrapper } from "../middleware/asyncWrapper.js"

export const getAllTask= asyncWrapper(async(req,res)=>{
        const result=await TaskModel.find()
        // res.status(200).json({result})
        // res.status(200).json({result,amount:results.length})
        res.status(200).json({status:'success',data:{result,nbHits:result.length}})   
})

export const createTask= asyncWrapper(async (req,res)=>{
        const result = await TaskModel.create(req.body);   //POST body
        res.status(201).json({ result });  
})         

//single task
export const getTask= asyncWrapper(async(req,res)=>{
        const{id}=req.params         // extract task id from URL
    const task= await TaskModel.findById(id)

    if (!task){
        return res.status(404).json({msg:`No task with id:${id}`})
    }
    res.status(200).json({task})

})

export const updateTask= asyncWrapper(async(req,res)=>{
        const {id}=req.params
        const task=await TaskModel.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        })
        if (!task){
            return res.status(404).json({msg:`No task with id:${id}`})
        }
        res.status(200).json({msg:"task updated successfully",task})

})

export const deleteTask= asyncWrapper(async(req,res)=>{
        const{id}=req.params
        const task=await TaskModel.findByIdAndDelete(id)
        if (!task){
            return res.status(404).json({msg:`No task with id:${id}`})
        }
        res.status(200).json({msg:"task deleted successfully",task})

})

 




// creteTask, updateTask --> TaskModel.query(req.body)     --> POST/Patch