import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import product from "./routes/product";
import user from "./routes/user";

const app: Application = express();
app.use(cors());
app.use(json());

const port: number = parseInt(process.env.SERVER_PORT || "3001");

app.use("/user", user);
app.use("/product", product);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
