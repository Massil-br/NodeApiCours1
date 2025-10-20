import { Request,Response } from "express";


const users = ["massil","hello"];

export async function GetAllUsers(req :Request,res :Response){
    res.status(200).json({users});
}

export async function AddUser(req:Request,res:Response){
    const username = req.body.username
    let userExist = false;
    const user = users.find(u => u === username)



    if(user){
        return res.status(401).json("Conflict can't create user");
    }
    users.push(username);
    return res.status(201).json("User created");

}

export async function GetUserById(req:Request,res:Response){
    const id = parseInt(req.params.id);

    const user = users[id];
    if(!user){
        return res.status(404).json("user not found");
    }
    res.status(200).json({user})
}

export async function EditUser(req:Request,res:Response){
    const newUser = req.body.username;
    const id = parseInt(req.params.id);
    const user = users[id];
    if (!user){
        return res.status(404).json("user not found")
    }
    if (!newUser || newUser == ""){
        return res.status(401).json("username can't be empty")
    }
    users[id] = newUser
    return res.status(201).json({newUser});
}

export async function DeleteUser(req:Request,res:Response){
    const id = parseInt(req.params.id);
    const user = users[id];
    if (!user){
        return res.status(404).json("user not found");
    }

    users.splice(id,1);
    return res.status(201).json(`User ${user} deleted successfully`);
}