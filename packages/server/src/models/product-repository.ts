import { ProductItem } from "@my-webshop/shared";
import { model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    title: String,
    price: Number,
    description: String,
    category: [String],
    weight: String,
    manufacturer: String,
  },
  { collection: "products" }
);

const ProductModel = model<ProductItem>("ProductItem", ProductSchema);

const loadAllProducts = async (): Promise<ProductItem[]> => {
return await ProductModel.find({}).exec();
};

export {loadAllProducts}