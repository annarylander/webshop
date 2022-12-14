import { ProductItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import {
  saveProduct,
  loadProducts,
  loadProductbyId,
  getSearchResult,
  updateProductController,
} from "../controllers/productController";
import { authUser } from "../services/auth";

const productRouter = express.Router();

interface MulterRequest extends Request {
  file: any;
}

productRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await loadProducts());
  } catch (error) {
    res.status(500).send("Something went went wrong getting products");
  }
});

productRouter.post(
  "/",
  authUser,
  async (req: Request, res: Response<ProductItem[]>) => {
    const product = req.body;
    const imagesMulter = (req as MulterRequest).file;
    try {
      product.mainImage = {
        url: `http://localhost:3002/${imagesMulter.path}`,
      };
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

productRouter.patch(
  "/:productId",
  authUser,
  async (req: Request, res: Response<ProductItem>) => {
    const productId = req.params.productId;
    const product = req.body;
    const imagesMulter = (req as MulterRequest).file;
    try {
      product.mainImage = {
        url: `http://localhost:3002/${imagesMulter.path}`,
      };
      await updateProductController(productId, product);
      res.send(product).status(200);
    } catch (e) {
      res.sendStatus(400);
    }
  }
);

export default productRouter;
