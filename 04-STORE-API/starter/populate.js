import dotenv from "dotenv"
dotenv.config()

import connectDB from "./db/connect.js"
import Product from "./models/product.js"
//import jsonProducts from "./products.json" assert { type: "json" };
import { readFileSync } from "fs";

// Load JSON safely
const jsonProducts = JSON.parse(
  readFileSync(new URL("./products.json", import.meta.url), "utf-8")
);

const startServer=async()=>{
    try{            
        await connectDB()

        // delete existing data (optional)
        await Product.deleteMany();

        // insert JSON data
        await Product.insertMany(jsonProducts);
        console.log("Success! Data populated");
        process.exit(0);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}
startServer()

