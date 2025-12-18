import asyncWrapper from '../middleware/asyncWrapper.js' 
import customAPIError from '../errors/custom-error.js'
import jwt from 'jsonwebtoken'

const login= asyncWrapper(async(req,res)=>{
    const {username, password}= req.body
// mongoose validation
//joi
// check in the controller 

    if(!username || !password){           // if both are missing
        throw new customAPIError('Please provide email and password',400)
    }

    // just for demo, normally provided by DB!!!
    const id=new Date().getDate()  

    //try to keep payload small, better experience for user
    const token= jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    
    res.status(200).json({msg:'user created',token})
}
) 
const dashboard= asyncWrapper(async(req,res)=>{
    const authHeader= req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new customAPIError('no token provided',401)
    }

    const token= authHeader.split(' ')[1]

    //verify jwt
    try{
        const decoded=jwt.verify(token, process.env.JWT_SECRET)
        const luckyNumber=Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello, ${decoded.username}`, secret:`here is your authorized data, your luckynumer ${luckyNumber}`})

        console.log(decoded)
    }catch(error){
        throw new customAPIError('Invalid token',401);
        
    }

    
    // console.log(token);
    
    
})

export {login, dashboard}