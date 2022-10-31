import { CartItem, UserItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import {
  deleteAllInCart,
  deleteCartItem,
  loadCartbyUser,
  saveOrder,
  checkoutCartItem,
} from "../controllers/orderController";
import { loadProductbyId } from "../controllers/productController";
import { authUser, JwtRequest } from "../services/auth";

const orderRouter = express.Router();

orderRouter.post(
  "/addtocart",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response<CartItem | null>) => {
    const user = req.jwt;
    const products = req.body;
    const payload: CartItem = {
      user: user?.email as string,
      products: products,
      bill: 0,
      isCheckedOut: false,
    };

    const productId = products.productId;
    console.log("user:", user, "payload:", payload, "productID:", productId);

    const token = req.jwt;
    if (!token) {
      res.sendStatus(401);
    } else {
      res.status(201).send(await saveOrder(payload, token?.email, productId));
    }
  }
);

orderRouter.get(
  "/getcart",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response) => {
    const email = req.jwt?.email;
    try {
      res.send(await loadCartbyUser(email as string));
    } catch (err) {
      res.status(204).send("Please login to view your cart");
    }
  }
);

orderRouter.patch(
  "/delete-item",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response) => {
    console.log("delete req", req.body);
    const email = req.jwt?.email;
    const productID = req.body.product;
    console.log("delete item", productID, "email", email);
    try {
      res.status(201).send(await deleteCartItem(email as string, productID));
    } catch (err) {
      res.status(400).send("Error deleting item");
    }
  }
);

orderRouter.delete(
  "/delete-cart",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response) => {
    console.log("delete req", req.body, "see jwt", req.jwt);
    const email = req.jwt?.email;
    console.log("email", email);
    try {
      res.status(201).send(await deleteAllInCart(email as string));
    } catch (err) {
      res.status(400).send("Error deleting item");
    }
  }
);

orderRouter.post(
  "/checkout",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response) => {
    const email = req.jwt?.email;
    console.log(email);
    console.log("update", req.body);

    try {
      res.status(201).send(await checkoutCartItem(email as string));
    } catch (err) {
      res.status(400).send("Error checking out");
    }
  }
);

export default orderRouter;
