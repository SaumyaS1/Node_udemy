export const errorHandler=(req,res)=>{
    res.status(500).json({msg:`something went wrong,try again later`})
}