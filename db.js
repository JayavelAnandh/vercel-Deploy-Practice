import { MongoClient } from "mongodb";
import Obj from "mongodb";
import dotenv from "dotenv"

dotenv.config();
const MONGO_URL = process.env.Mongo_URL;


async function connectToDatabase() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Connected to the DB");
  
    return client.db("Products").collection("ProductData");
  }

  export const ObjectId = Obj.ObjectId;
  export const clientbig = connectToDatabase();