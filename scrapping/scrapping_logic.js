import  express, { Router }  from "express";
import puppeteer from 'puppeteer';
// import { Product3_controller,Product4_controller} from "../controllers/scrapController.js";
import { Product1_controller,Product2_controller,Product3_controller,Product4_controller,Product5_controller,Product6_controller,Product7_controller,Product8_controller,Product9_controller,Product10_controller,Product11_controller,Product12_controller,Product13_controller,Product14_controller,Product15_controller,Product16_controller ,Product17_controller} from "../controllers/scrapController.js";
const route=express.Router();


route.get("/Product1", Product1_controller);
route.get("/Product2", Product2_controller);
route.get("/Product3", Product3_controller);
route.get("/Product4", Product4_controller);
route.get("/Product5", Product5_controller);
route.get("/Product6", Product6_controller);
route.get("/Product7", Product7_controller);
route.get("/Product8", Product8_controller);
route.get("/Product9", Product9_controller);
route.get("/Product10", Product10_controller);
route.get("/Product11", Product11_controller);
route.get("/Product12", Product12_controller);
route.get("/Product13", Product13_controller);
route.get("/Product14", Product14_controller);
route.get("/Product15", Product15_controller);
route.get("/Product16", Product16_controller);
route.get("/Product17", Product17_controller);


export default route;