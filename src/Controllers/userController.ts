import { Request,Response } from "express";


const users = ["massil","hello"];

export async function GetAllUsers(req :Request,res :Response){
    res.status(200).json({users});
}

export async function AddUser(req:Request,res:Response){
    const username = req.body.username
    let userExist = false;
    users.forEach(element => {
        if (element == username){
           userExist = true;
        }
    });

    if(userExist){
        return res.status(401).json("Conflict can't create user");
    }
    
    users.push(username);
    return res.status(201).json("User created");

}