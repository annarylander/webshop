import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import product from "./routes/product";
import user from "./routes/user";
import order from "./routes/order";
import dotenv from "dotenv";
import { setupMongoDb } from "./models/common";
const multer = require("multer");

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(json());

const port: number = parseInt(process.env.SERVER_PORT || "3002");

// image will upload to uploads folder locally, not to db yet
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (
    req: any,
    file: { originalname: any },
    cb: (arg0: null, arg1: any) => void
  ) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.use(upload.array("moreImages"));
app.use("/uploads", express.static("./uploads"));

app.use("/user", user);
app.use("/product", product);
app.use("/order", order);

const MONGO_URL: string =
  process.env.MONGO_URL || "mongodb://localhost:27017/plantshop";

app.listen(port, async function () {
  await setupMongoDb(MONGO_URL);
  console.log(`App is listening on port ${port} !`);
});
