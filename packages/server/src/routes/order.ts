import { CartItem, UserItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import { resolve } from "path";
import { loadOrderbyId, saveOrder } from "../controllers/orderController";
import { loadProductbyId } from "../controllers/productController";
import { authUser, JwtRequest } from "../services/auth";

const orderRouter = express.Router();

orderRouter.post(
  "/addtocart", authUser, async (req: JwtRequest<CartItem>, res: Response<CartItem | null>) => {
    console.log('req body', req.body, req)
    const user = '634a838cee3d87d39de76e34'
    const payload: CartItem = {
      user: user,
      products: req.body,
      bill: 0,
      isCheckedOut: false,
    }

    try {
      const token =  req.jwt
      console.log('token', token)
      if (!token) throw new Error("No token provided");
     // res.send(await saveOrder(payload, token?.email, payload.products[0].productId));
     res.send(await saveOrder(payload, token?.email, payload.products[0].productId));
    } catch {
      res.sendStatus(400);
    }   
  } );


orderRouter.get("/getcart", authUser, async (req: Request, res: Response) => {
  try {
    res.send(await loadOrderbyId(req.params.user));
  } catch (error) {
    res.status(500).send("Something went went wrong getting order");
  }
});

export default orderRouter;
