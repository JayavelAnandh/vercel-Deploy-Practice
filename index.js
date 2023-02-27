
import express from "express";
import cors from "cors";
import { productsRouter } from "./routes/products.js"
const app = express();

app.use(express.static("express"));
app.use(express.json());
app.use(cors())


app.use("/data",productsRouter)

// app.use((req,res)=>{
//     res.status(404).send({Response:"Data not found"})
    
// })
app.get("/", (req, res)=>{
    res.send("Hello i'm working fine")
 })
app.listen(9000, () => console.log(`server started localhost: 9000`));
