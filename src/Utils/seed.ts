import mongoose from "mongoose";
import { faker} from "@faker-js/faker"
import Product from "../Models/Product.ts";
import type {IProduct} from "../Models/Product.ts";
const mongoUrl = "mongodb+srv://massil:MassilDev@cluster0.riaqhf4.mongodb.net/"


mongoose.connect(mongoUrl,{}).then(()=>{
  console.log("MangoDB connected")
})
.catch((error)=>{
  console.error("MangoDB failed to connect" + error);
});


const createProduct = () :IProduct  =>{
    const productName :string = faker.commerce.productName();
    const productPrice:number = parseFloat(faker.commerce.price()) ;
    const product :IProduct= new Product({name: productName, price: productPrice});
    return product;
}


const createMultipleProducts = (amount : number) =>{
    const products : IProduct[] = [];
    for(let i = 0 ; i < amount ; i++){
        products.push(createProduct());
    }
    return products;
}


const  saveProducts = async (productList : IProduct[]) =>{
    Product.insertMany(productList);
    console.log("inserted " +  productList.length);
}

const products = createMultipleProducts(200);
await saveProducts(products);

