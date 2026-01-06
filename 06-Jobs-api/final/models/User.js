import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provide name'],
        minlength:3,
        maxlength: 30
    },
    email:{
        type:String,
        required:[true,'please provide email'],
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/],
        unique:true
    },
    password:{
        type:String,
        required:[true,'please provide password'],
        minlength:6,
        maxlength: 12
    }
})  

const UserModel = mongoose.model('user',UserSchema)    // user → collection name in db (auto-created)
export default UserModel