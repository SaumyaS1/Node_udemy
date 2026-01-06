//CRUD
const getAllJobs= async(req,res)=>{
    res.send("get all jobs")
}
const getJob= async(req,res)=>{
    res.send("get a job")
}
const CreateJob= async(req,res)=>{
    res.send("create a job")
}
const UpdateJob= async(req,res)=>{
    res.send("update job")
}
const DeleteJob= async(req,res)=>{
    res.send("Delete job")
}

export {getAllJobs,getJob,CreateJob,UpdateJob,DeleteJob}