import { CartItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import { loadOrderbyId, saveOrder } from "../controllers/orderController";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  async (req: Request<CartItem>, res: Response<CartItem[]>) => {
    try {
      res.send(await saveOrder(req.body));
    } catch (e) {
      res.sendStatus(400);
    }
  }
);

orderRouter.get("/:orderId", async (req: Request, res: Response) => {
  try {
    res.send(await loadOrderbyId(req.params.orderId));
  } catch (error) {
    res.status(500).send("Something went went wrong getting order");
  }
});

export default orderRouter;