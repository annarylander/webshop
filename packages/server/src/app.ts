import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import product from "./routes/product";
import user from "./routes/user";
import dotenv from "dotenv";
import { setupMongoDb } from "./models/common";

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

const MONGO_URL: string =
  process.env.MONGO_URL || "mongodb://localhost:27017/plantshop";

app.listen(port, async function () {
  await setupMongoDb(MONGO_URL);
  console.log(`App is listening on port ${port} !`);
});
