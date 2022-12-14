import { CartItem } from "@my-webshop/shared";
import { model, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    user: String,
    products: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "ProductItem" },
        title: String,
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"],
          default: 1,
        },
        price: Number,
      },
    ],
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
    isCheckedOut: { type: Boolean, default: false },
    status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
    collection: "orders",
  }
);

const OrderModel = model<CartItem>("Order", OrderSchema);

const findCartbyUser = async (email: string): Promise<CartItem | null> => {
  return await OrderModel.findOne({ user: email, isCheckedOut: false }).exec();
};

const saveOrderItem = async (order: CartItem): Promise<CartItem> => {
  const newOrder = new OrderModel(order);
  return await newOrder.save();
};

const deleteCart = async (email: string) => {
  return await OrderModel.deleteOne({ user: email, isCheckedOut: false });
};

const checkoutCart = async (email: string) => {
  return await OrderModel.updateOne(
    { user: email, isCheckedOut: false },
    { isCheckedOut: true }
  );
};

const findPreviousOrders = async (
  email: string
): Promise<CartItem[] | null> => {
  return await OrderModel.find({ user: email, isCheckedOut: true }).exec();
};

const findAllOrders = async (email: string): Promise<CartItem[] | null> => {
  return await OrderModel.find({}).exec();
};

const updateOrder = async (orderId: string, status: any): Promise<any> => {
  return await OrderModel.findOneAndUpdate(
    { _id: orderId },
    { status: status }
  );
};

export {
  findCartbyUser,
  saveOrderItem,
  deleteCart,
  checkoutCart,
  findPreviousOrders,
  findAllOrders,
  updateOrder,
};
