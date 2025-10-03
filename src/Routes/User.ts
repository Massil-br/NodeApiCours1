import express from "express";
import { GetAllUsers,AddUser } from "../Controllers/userController.js";




const router = express.Router();


router.get("/",GetAllUsers)
router.post("/",AddUser)



export default router;