
import express from "express";
import cors from "cors";
const app = express();

app.use(express.static("express"));
app.use(express.json());
app.use(cors())

import { productsRouter } from "./routes/products.js";

app.use("/data",productsRouter)

app.use((req,res)=>{
    res.status(404).send({Response:"Data not found"})
    
})

app.listen(9000, () => console.log(`server started localhost: 9000`));
