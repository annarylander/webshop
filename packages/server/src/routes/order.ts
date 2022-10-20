import { CartItem, UserItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import { loadCartbyUser, saveOrder } from "../controllers/orderController";
import { loadProductbyId } from "../controllers/productController";
import { authUser } from "../services/auth";

const orderRouter = express.Router();

orderRouter.post(
  "/:id",
  async (req: Request, res: Response) => {
    
    const user = '634a838cee3d87d39de76e34'
    const payload: CartItem = {
      user: user,
      products: req.body,
      bill: 0,
      isCheckedOut: false,
    }

    try {
      res.send(await saveOrder(payload, payload.user, payload.products[0].productId));
    } catch (e) {
      res.sendStatus(400);
    }
  }
);

orderRouter.get("/:id", authUser, async (req: Request, res: Response) => {
  try {
    res.send(await loadCartbyUser(req.params.user))
  } catch {
    res.status(204).send("No Cart found");
  }
});

export default orderRouter;
