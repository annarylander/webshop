import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import product from "./routes/product";
import user from "./routes/user";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(json());

const port: number = parseInt(process.env.SERVER_PORT || "3002");

app.use("/user", user);
app.use("/product", product);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

const MONGO_URL: string = process.env.MONGO_URL || "mongodb://localhost:27017/plantshop";  

async function connectToMongo() {
  try {
    await mongoose.connect(MONGO_URL, {
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
} 

app.listen(port, async function () {
  await connectToMongo()
  console.log(`App is listening on port ${port} !`);
});
