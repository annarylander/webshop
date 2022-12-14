import { CartItem, UserItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import {
  deleteAllInCart,
  deleteCartItem,
  loadCartbyUser,
  saveOrder,
  checkoutCartItem,
  loadPreviousOrders,
  getAllOrders,
  getUpdateOrder,
} from "../controllers/orderController";
import { loadProductbyId } from "../controllers/productController";
import { updateOrder } from "../models/orders-repository";
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
      status: "pending",
    };

    const productId = products.productId;
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
    const email = req.jwt?.email;
    const productID = req.body.product;
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
    const email = req.jwt?.email;
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
    try {
      res.status(201).send(await checkoutCartItem(email as string));
    } catch (err) {
      res.status(400).send("Error checking out");
    }
  }
);

orderRouter.get(
  "/previous-orders",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response) => {
    const email = req.jwt?.email;
    try {
      res.send(await loadPreviousOrders(email as string));
    } catch (err) {
      res.status(204).send("No previous orders");
    }
  }
);

orderRouter.get(
  "/all-orders",
  authUser,
  async (req: JwtRequest<CartItem>, res: Response) => {
    const email = req.jwt?.email;
    try {
      res.send(await getAllOrders(email as string));
    } catch (err) {
      res.status(204).send("No orders");
    }
  }
);

orderRouter.put("/:id", authUser, async (req: Request, res: Response) => {
  const status = req.body.status;
  const orderId = req.params.id;
  try {
    res.send(await getUpdateOrder(orderId, status));
  } catch (err) {
    res.status(204).send("No orders");
  }
});

export default orderRouter;
