import CustomAPIError from "../errors/custom-error.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError){
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ message: 'Something went wrong, try again later' })

};



// export const errorHandler=(req,res)=>{
//     res.send(500).json({msg:`something went wrong,try again later`})
// }