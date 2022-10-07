import { ProductItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import { saveProduct, loadProducts } from "../controllers/productController";

const productRouter = express.Router();

productRouter.get("/", async (req: Request, res: Response) => {
    try{
        res.status(200).send(await loadProducts());
      } catch (error) {
        res.status(500).send('Something went went wrong getting products')
      }
});

productRouter.post("/", async (req: Request<ProductItem>, res: Response<ProductItem[]>) => {
  try {
    res.send(await saveProduct(req.body));
  } catch (e) {
    res.sendStatus(400);
  }
});

export default productRouter;
