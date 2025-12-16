import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name']
    },
    price:{
        type:Number,
        required:[true,'product name must be provided']
    },
    featured:{
        type:Boolean,
        default:false  
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:'{VALUE}'
        }
    }
})

const productModel=mongoose.model('product',productSchema)
export default productModel