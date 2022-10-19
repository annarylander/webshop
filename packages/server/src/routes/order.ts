import { CartItem, UserItem } from "@my-webshop/shared";
import express, { Request, Response } from "express";
import { loadOrderbyId, saveOrder } from "../controllers/orderController";
import { loadProductbyId } from "../controllers/productController";
import { authUser } from "../services/auth";

const orderRouter = express.Router();

orderRouter.post(
  "/:id",
  async (req: Request, res: Response) => {
    
 /*    const user = req.params.user
    const {productId, quantity} = req.body

   

    try {
    let cart = await loadOrderbyId(user)
    let product = await loadProductbyId({_id: productId})
    if(!product){
      res.status(404).send('Item not found!')
  }
    }
    const price = product.price
    const  
 */
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
    res.send(await loadOrderbyId(req.params.user));
  } catch (error) {
    res.status(500).send("Something went went wrong getting order");
  }
});

export default orderRouter;
