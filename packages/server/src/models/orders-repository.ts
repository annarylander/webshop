import { CartItem } from "@my-webshop/shared";
import { model, Schema } from "mongoose";


const OrderSchema = new Schema({
    product: {type: Schema.Types.ObjectId, ref: "ProductItem"},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    totalPrice: Number,
    quantity: Number,
    status: String,
}, {
    timestamps: true,
    collection: "orders"
})

const OrderModel = model<CartItem>("Order", OrderSchema);

const loadAllOrders = async (): Promise<CartItem[]> => {
    return await OrderModel.find({}).exec();
  };
  
  const loadSingleOrder = async (orderId: string): Promise<CartItem | null> => {
    return await OrderModel.findById(orderId).exec();
  };
  
  const saveOrderItem= async (order: CartItem): Promise<CartItem> => {
    const newProduct = new OrderModel(order);
    return await newProduct.save();
  };

export {loadAllOrders, loadSingleOrder, saveOrderItem}