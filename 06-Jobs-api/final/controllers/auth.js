import UserModel from '../models/User.js'
import { StatusCodes } from 'http-status-codes';
import asyncWrapper from '../middleware/asyncWrapper.js'

const register= asyncWrapper(async(req,res)=>{
    const user= await UserModel.create({...req.body})
    res.status(StatusCodes.CREATED).json({user})
    // res.send("resgister user")
})
const login= async(req,res)=>{
    res.send("login user")
}

export {register, login}