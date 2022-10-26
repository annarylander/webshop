import { CartItem, UserItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import {
  deleteCartItem,
  loadCartbyUser,
  saveOrder,
} from "../controllers/orderController";
import { loadProductbyId } from "../controllers/productController";
import { authUser, JwtRequest } from "../services/auth";

const orderRouter = express.Router();

orderRouter.post(
  "/addtocart",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response<CartItem | null>) => {
    const user = req.jwt;
    const payload: CartItem = {
      user: user?.email as string,
      products: req.body,
      bill: 0,
      isCheckedOut: false,
    };

    const token = req.jwt;
    if (!token) {
      res.sendStatus(401);
    } else {
      res
        .status(201)
        .send(
          await saveOrder(payload, token?.email, payload.products[0].productId)
        );
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

orderRouter.delete(
  "/deleteitem",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response) => {
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

export default orderRouter;
