import { Request,Response } from "express";
import { parseIsolatedEntityName } from "typescript";

const Posts:string[] =[]


export async function GetAllPosts(req:Request,res:Response){
    res.status(200).json({Posts});

}

export async function AddPost(req:Request,res:Response){
    const content = req.body.content;
    if (!content || content == ""){
        return res.status(401).json("content in body can't be empty");
    }
    Posts.push(content);
    res.status(201).json(content);
}

export async function GetPost(req:Request,res:Response){
    const id = parseInt(req.params.id);
    const post = Posts[id];
    if (!post){
        return res.status(404).json("Post not found");
    }

    return res.status(200).json({post});

}

export async function DeletePost(req:Request,res: Response){
    const id = parseInt(req.params.id);
    const post = Posts[id];
    if (!post){
        return res.status(404).json("Post not found");
    }
    Posts.slice(id,1);
    return res.status(201).json(`user ${post} deleted successfully`);
}
