import mongoose from "mongoose";
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        unique: true,
        required:[true,"Please provide an Email address"],
    },
    password:{
        type: String,
        required: [true, 'A Password is required'],

    },
    phone:{
        type:Number,
        required:true,

    },
    address:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true})

export default mongoose.model('users',userSchema);