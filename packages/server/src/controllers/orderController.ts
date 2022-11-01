import { CartItem, ProductItem } from "@my-webshop/shared";
import { Request, Response } from "express";
import {
  deleteCart,
  findCartbyUser,
  saveOrderItem,
  checkoutCart,
  findPreviousOrders,
} from "../models/orders-repository";
import { loadSingleProduct } from "../models/product-repository";

const saveOrder = async (
  order: CartItem,
  email: string,
  productId: string
): Promise<CartItem | null> => {
  try {
    const cart = await findCartbyUser(email);
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
        cart.products[itemIndex].price += product.price;
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
  return await loadCartbyUser(email);
};

const deleteCartItem = async (
  email: string,
  productId: string
): Promise<void> => {
  try {
    const cart = await findCartbyUser(email);
    const product = await loadSingleProduct(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    const price = product.price;

    if (cart) {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      console.log("see itemIndex", itemIndex);
      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        if (productItem.quantity > 1) {
          productItem.quantity--;
          productItem.price -= price;
          cart.bill -= price;
        } else {
          productItem.price -= price;
          cart.bill -= price;
          cart.products.splice(itemIndex, 1);
        }
      }
      await saveOrderItem(cart);
    }
  } catch {
    throw new Error("Error deleting cart item");
  }
};

const deleteAllInCart = async (email: string): Promise<void> => {
  const cart = await findCartbyUser(email);
  console.log("deleting cart", cart);

  if (!cart) {
    throw new Error("No cart found");
  }
  await deleteCart(email);
};

const loadCartbyUser = async (email: string): Promise<CartItem> => {
  const cart = await findCartbyUser(email);

  if (!cart) {
    throw new Error("No cart found");
  }
  return cart;
};

const checkoutCartItem = async (email: string): Promise<CartItem> => {
  const cart = await findCartbyUser(email);
  console.log("checking out cart", cart);

  if (!cart) {
    throw new Error("No cart found");
  }
  cart.isCheckedOut = true;
  console.log("done", cart);

  await checkoutCart(email);
  return cart;
};

const loadPreviousOrders = async (email: string): Promise<CartItem[]> => {
  const orders = await findPreviousOrders(email);
  if (!orders) {
    throw new Error("No previous orders found");
  }
  return orders;
};

export {
  saveOrder,
  deleteCartItem,
  loadCartbyUser,
  deleteAllInCart,
  checkoutCartItem,
  loadPreviousOrders,
};
