import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./src/Routes/User.js";
import mongoose from "mongoose";
import ProductRouter from "./src/Routes/Products.js"
const mongoUrl = "mongodb+srv://massil:MassilDev@cluster0.riaqhf4.mongodb.net/"


mongoose.connect(mongoUrl,{}).then(()=>{
  console.log("MangoDB connected")
})
.catch((error)=>{
  console.error("MangoDB failed to connect" + error);
})
;

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("BRRRRRRRRRRRRRRAAAAA");
});

app.use('/products',ProductRouter);
app.use('/users', UserRouter);


const PORT = 3520;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
