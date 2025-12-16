export const errorHandler=(req,res)=>{
    res.status(500).json({msg:`Something went wrong,try again later`})
}