
import mongoose,{Schema,Document,Model} from "mongoose";

export interface IProduct extends Document{
    name:string;
    price:number;
    createdAt?:Date;
    updatedAt?:Date;
}

const ProductSchema : Schema<IProduct> = new mongoose.Schema({
    name:{
        type : String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:100
    },
    price:{
        type:Number,
        required:true,
        min:0
    }
},{timestamps:true})

const Product:Model<IProduct> = mongoose.model<IProduct>("Product",ProductSchema);


export default Product;