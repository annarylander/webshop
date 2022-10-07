import express, { Request, Response } from "express";

const productRouter = express.Router();

productRouter.get("/", (req: Request, res: Response) => {
  res.send("Getting some products");
});

productRouter.post("/", (req: Request, res: Response) => {
  res.send("Posting some products");
});

export default productRouter;
