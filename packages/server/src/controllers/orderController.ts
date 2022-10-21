import { CartItem, ProductItem } from "@my-webshop/shared";
import { Request, Response } from "express";
import {
  loadAllOrders,
  findCartbyUser,
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
    const cart = await findCartbyUser(userId);
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

const loadCartbyUser = async (userId: string): Promise<CartItem> => {

  const cart = await loadSingleOrder(userId);

  if (!cart) {
    throw new Error("No cart found");
  }
  return cart;
};

export { saveOrder, loadCartbyUser };
