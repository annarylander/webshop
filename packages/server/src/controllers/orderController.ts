import { CartItem, ProductItem } from "@my-webshop/shared";
import { Request, Response } from "express";
import {
  loadAllOrders,
  loadCartbyUser,
  loadSingleOrder,
  saveOrderItem,
} from "../models/orders-repository";
import { loadSingleProduct } from "../models/product-repository";

const saveOrder = async (
  order: CartItem,
  userId: string,
  productId: string
): Promise<CartItem | null> => {
  try {
    const cart = await loadCartbyUser(userId);
    const product = await loadSingleProduct(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    const price = product.price;
    const title = product.title;

    if (cart) {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      if (itemIndex > -1) {
        cart.products[itemIndex].quantity++;
        cart.products[itemIndex].price += cart.products[itemIndex].price;
        cart.bill += price;
      } else {
        cart.products.push({ productId, title, price, quantity: 1 });
        cart.bill += price;
      }
      await saveOrderItem(cart);
    } else {
      const newCart = order;
      newCart.bill += price;
      await saveOrderItem(newCart);
    }
  } catch {
    throw new Error("Error saving order");
  }

  return await loadCartbyUser(userId);
};

const loadOrderbyId = async (orderId: string): Promise<CartItem> => {
  const order = await loadSingleOrder(orderId);

  if (!order) {
    throw new Error("Order not found");
  }
  return order;
};

export { saveOrder, loadOrderbyId };
