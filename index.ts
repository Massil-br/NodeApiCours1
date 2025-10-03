import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./src/Routes/User.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("BRRRRRRRRRRRRRRAAAAA");
});

app.use("/users", UserRouter);


const PORT = 3520;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
