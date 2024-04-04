import  express, { Router }  from "express";
import {registerController,loginController,testController} from "../controllers/authController.js";
import { isadmin, requireSignin } from "../middlewares/authmiddlware.js";
//router object
const route=express.Router();


//routing
//register
route.post('/register',registerController);
//login
route.post('/login',loginController);
//test route
route.get("/test",requireSignin,isadmin,testController);

export default route;