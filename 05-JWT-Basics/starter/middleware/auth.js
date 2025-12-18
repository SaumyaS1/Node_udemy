import customAPIError from "../errors/custom-error.js"
import jwt from 'jsonwebtoken'

const authentictaion=async(req,res)=>{
    // console.log(req.headers.authentictaion);

    const authHeader= req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new customAPIError('no token provided',401)
    }

    const token= authHeader.split(' ')[1]

    //verify jwt
    try{
        const decoded=jwt.verify(token, process.env.JWT_SECRET)
        const{id,username}=decoded
        req.user={id,username}
        next()
        
    }catch(error){
        throw new customAPIError('Invalid token',401);
        
    }
    
    
}
export default authentictaion;