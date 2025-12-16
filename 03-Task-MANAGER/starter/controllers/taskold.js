export const getAllTask=(req,res)=>{
    res.send("Get all the items")
}

export const createTask=async (req,res)=>{
    // res.send("task created")
    res.json(req.body)           // POST request
}

export const getTask=(req,res)=>{
    // res.send("gat a task")
    res.json({id:req.params.id})
}

export const updateTask=(req,res)=>{
    res.send("task updated")
}

export const deleteTask=(req,res)=>{
    res.send("task deleted")
}
