import express from "express"
import { getProducts } from "../controllers/routeExporters.js";
import { clientbig } from "../db.js";
import { ObjectId } from "../db.js";

const router = express.Router();


router.get("/", async (req, res) => {
    const collection = await clientbig;
    const data = await getProducts(collection);
    res.send(data);
    
  });
  
  router.get("/query", async (req, res) => {
      
      if(!isNaN(parseFloat(req.query.product_price)) && isFinite(req.query.product_price)){
          req.query.product_price = +req.query.product_price
      }
  
      const collection = await clientbig;
      const data = await collection.find(req.query).toArray();
      res.json(data);
      
    });
  
  // for single student
  
  router.get("/:id",async(req,res)=>{
      const {id} = req.params;
      console.log(id)
      const collection = await clientbig;
      const productdetail = await collection.findOne({ _id:new ObjectId(id)});
      res.send(productdetail);
  
  })
  
  router.post("/",async(req,res)=>{
      const newData = req.body;
      const collection = await clientbig;
      const result = await collection.insert(newData)
      res.send(result);
  })
  
  router.post("/insertmany",async(req,res)=>{
      const newData = req.body;
      const collection = await clientbig;
      const result = await collection.insertMany(newData)
      res.send(result);
  })
  
  router.put("/:id",async(req,res)=>{
      const{id}= req.params
      const updatedData = req.body;          //   console.log(req.body)
      const collection = await clientbig;
      const editProduct = await collection.updateOne({_id:new ObjectId(id)},{$set:updatedData});
      res.send(editProduct)
  
  })
  
  router.delete("/:id",async(req,res)=>{
      const{id}= req.params;
      const collection = await clientbig;
      const deletedResult = await collection.deleteOne({_id:new ObjectId(id)})
      res.send(deletedResult);
  })
  
  export const productsRouter = router;