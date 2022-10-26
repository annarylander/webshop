import { ProductItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import {
  saveProduct,
  loadProducts,
  loadProductbyId,
  getSearchResult,
  getResultByTag,
} from "../controllers/productController";
import { searchProduct } from "../models/product-repository";

const productRouter = express.Router();

productRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await loadProducts());
  } catch (error) {
    res.status(500).send("Something went went wrong getting products");
  }
});

productRouter.post(
  "/",
  async (req: Request<ProductItem>, res: Response<ProductItem[]>) => {
    try {
      res.send(await saveProduct(req.body));
    } catch (e) {
      res.sendStatus(400);
    }
  }
);

productRouter.get("/:productId", async (req: Request, res: Response) => {
  try {
    res.send(await loadProductbyId(req.params.productId));
  } catch (error) {
    res.status(500).send("Something went went wrong getting product");
  }
});

productRouter.get("/search/:query", async (req: Request, res: Response) => {
  try {
    res.send(await getSearchResult(req.params.query));
  } catch (e) {
    res.sendStatus(500);
  }
});

productRouter.get("/tag/:tag", async (req: Request, res: Response) => {
  try {
    res.send(await getResultByTag(req.params.tag));
  } catch (e) {
    res.sendStatus(500);
  }
});

export default productRouter;
