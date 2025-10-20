import express from "express";
import type { Request, Response } from "express";
import { GetAllUsers,AddUser, GetUserById, EditUser, DeleteUser } from "../Controllers/userController.js";




const router = express.Router();


router.get("/",GetAllUsers);
router.post("/",AddUser);
router.get("/:id",GetUserById);
router.put("/:id",EditUser);
router.delete("/:id",DeleteUser)
  


export default router;