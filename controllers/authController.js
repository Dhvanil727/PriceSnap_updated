import { request } from "express";
import { comparepassword, hashPassword } from "../helpers/authhelper.js";
import userModels from "../models/userModels.js";
import JWT from "jsonwebtoken";
export const registerController=async(request,response)=>{
    try {
        const {name,email,password,phone,address}=request.body
        //validations
        if(!name){
            return response.send({message:"name is required"})
        }
        if(!email){
            return response.send({message:"email is required"}) 
        }
        if(!password){
            return response.send({message:"password is required"}) 
        }
        if(!phone){
            return response.send({message:"phone is required"}) 
        }
        if(!address){
            return response.send({message:"address is required"}) 
        }
        const existinguser=await userModels.findOne({email});
        if(existinguser)return response.status(200).send("User already exists")
        
        //register user
        const hashedPassword=await hashPassword(password);
        //save

        const user=await new userModels({name,email,phone,address,password:hashedPassword}).save()

       response.status(201).json({
            success:true,
            message:'User registered',
            user
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success:false,
            message:"Error in Registration",
            error
        })
    }
};

//post login

export const loginController=async(request,response)=>{
    try {
        const {email,password}=request.body;
        if(!email || !password){
            return response.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        const user=await userModels.findOne({email})
        if(!user){
            return response.status(404).send({
                success:false,
                message:"email not registered"
            })
        }
        const match= await comparepassword(password,user.password);
        if(!match){
            return response.status(200).send({
                success:false,
                message:"invalid password"
            })
        }
        //TOKEN
        const token=await JWT.sign({_id:user.id},process.env.JWT_SECRET,{
                expiresIn:"7d",
        });
        response.status(200).send({
            success:true,
            message:"login successful",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token,
        })
    } catch (error) {
        console.log(error)
        response.status(500).send({
            success:false,
            message:"error in login",
            error
        })
    }
}

//test controller
export const testController=(request,response)=>{
    response.send(
        "protected route"
    )
}