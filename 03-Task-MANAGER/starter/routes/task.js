import { Router } from "express";
import { 
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask } from "../controllers/task.js";          //importing controllers in routes

const router= Router()


router.route('/').get(getAllTask).post(createTask)      // getAllTask--> comtroller
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)    

export default router





// router.route('/').get((req,res)=>{
//     res.send("hello this side get all items")
// })