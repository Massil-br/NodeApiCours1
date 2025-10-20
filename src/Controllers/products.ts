import { Request,Response } from "express";
import Product from "../Models/Product.js";
import { privateDecrypt } from "crypto";



export async function GetAllProducts(req:Request,res:Response){
    try{
        const products = await Product.find();
        return res.status(200).json({products});
    }catch(error){
        console.log("errrr")    ;
        return res.status(501).json({error});
    }
}

export async function AddProduct(req:Request,res:Response){
    try{
        const{name,price} = req.body;
        if (!name || !price){
            return res.status(400).json({message:"name and price required"});
        }  
        const newProduct =await new Product({name,price})?.save();
        res.status(200).json({message:"Product created",product:newProduct})
    }catch(error){
        console.error("Error creating product:",error);
        return res.status(500).json({message:"Server error"})
    }
    
}