import { request } from 'express';
import JWT from 'jsonwebtoken'
import userModels from '../models/userModels.js';

//protected routes token based
export const requireSignin=async(request,response,next)=>{
   try {
    const decode=JWT.verify(request.headers.authorization,process.env.JWT_SECRET);
    request.user=decode;
    next()
   } catch (error) {
    console.log(error);
   }
}

//admin access
export const isadmin=async(request,response,next)=>{
    try {
     const user=await userModels.findById(request.user._id);
     if(user.role!==1){
        return response.status(401).send({
            success:false,
            message:"Unauthorized access"
        });
     }else{
        next();
     }   
    } catch (error) {
        console.log(error);
        return response.status(401).send({
            success:false,
            message:"error in admin middleware"
        })
        
    }
}