import  express  from "express";
import { AddProduct, GetAllProducts } from "../Controllers/products.js";
const router = express.Router();

console.log("[ProductsRouter] loaded");


router.get("/ping", (_req, res) => {
  res.json({ ok: true });
});

router.post("/",AddProduct);

router.get('/',GetAllProducts);



export default router;