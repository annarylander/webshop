import { CartItem, ProductItem } from "@my-webshop/shared";
import { Request, Response } from "express";
import {
  loadAllOrders,
  loadCartbyUser,
  loadSingleOrder,
  saveOrderItem,
} from "../models/orders-repository";
import { loadSingleProduct } from "../models/product-repository";

const checkCart = async (userId: string): Promise<CartItem> => {
  const cart = await loadCartbyUser(userId);

  if (!cart) {
    throw new Error("Cart not found");
  }
  return cart;
};

const saveOrder = async (
  order: CartItem,
  userId: string,
  productId: string
): Promise<void> => {
  try {
    const cart = await loadCartbyUser(userId);
    const product = await loadSingleProduct(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    const price: number = product.price;
    const title = product.title;

    if (cart) {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      if (itemIndex > -1) {
        cart.products[itemIndex].quantity++;
        cart.bill += price;
      } else {
        cart.products.push({ productId, title, price, quantity: 1 });
        cart.bill += price;
      }
      saveOrderItem(cart);
    } else {
      const newCart = order;
      newCart.bill += price;
      saveOrderItem(newCart);
    }
  } catch {
    throw new Error("Error saving order");
  }
};

const loadOrderbyId = async (orderId: string): Promise<CartItem> => {
  const order = await loadSingleOrder(orderId);

  if (!order) {
    throw new Error("Order not found");
  }
  return order;
};

export { saveOrder, loadOrderbyId };
