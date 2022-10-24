import { CartItem, UserItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import { resolve } from "path";
import { stringify } from "querystring";
import { loadCartbyUser, saveOrder } from "../controllers/orderController";
import { loadProductbyId } from "../controllers/productController";
import { authUser, JwtRequest } from "../services/auth";

const orderRouter = express.Router();

orderRouter.post(
  "/addtocart",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response<void>) => {
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

export default orderRouter;
