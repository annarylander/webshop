import { CartItem } from "@my-webshop/shared";
import { model, Schema } from "mongoose";
import { loadProductbyId } from "../controllers/productController";
import { loadSingleProduct } from "./product-repository";

const OrderSchema = new Schema(
  {
    user: String,
    products: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "ProductItem" },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"],
          default: 1,
        },
      },
    ],
    price: Number,
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
    status: String,
  },
  {
    timestamps: true,
    collection: "orders",
  }
);

const OrderModel = model<CartItem>("Order", OrderSchema);

const loadAllOrders = async (): Promise<CartItem[]> => {
  return await OrderModel.find({}).exec();
};

const loadSingleOrder = async (orderId: string): Promise<CartItem | null> => {
  return await OrderModel.findById(orderId).exec();
};

const saveOrderItem = async (order: CartItem): Promise<CartItem> => {
  const newOrder = new OrderModel(order);
  return await newOrder.save();
};

export { loadAllOrders, loadSingleOrder, saveOrderItem };
