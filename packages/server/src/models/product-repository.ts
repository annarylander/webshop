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
    mainImage: { url: String, alt: String },
    moreImages: [{ url: String, alt: String }],
  },
  { collection: "products" }
);

const ProductModel = model<ProductItem>("ProductItem", ProductSchema);

const loadAllProducts = async (): Promise<ProductItem[]> => {
  return await ProductModel.find({}).exec();
};

const loadSingleProduct = async (
  productsId: string
): Promise<ProductItem | null> => {
  return await ProductModel.findById(productsId).exec();
};

const saveProductItem = async (product: ProductItem): Promise<ProductItem> => {
  const newProduct = new ProductModel(product);
  return await newProduct.save();
};

const searchProduct = async (query: string): Promise<ProductItem[]> => {
  return await ProductModel.find({
    $or: [
      { title: RegExp(query, "i") },
      {
        category: { $elemMatch: { $eq: query } },
      },
    ],
  }).exec();
};

const updateProduct = async (
  id: string,
  product: ProductItem
): Promise<ProductItem | null> => {
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    id,
    {
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      weight: product.weight,
      manufacturer: product.manufacturer,
      mainImage: product.mainImage,
      moreImages: product.moreImages,
    },
    {
      new: true,
    }
  );
  return updatedProduct;
};

export {
  loadAllProducts,
  loadSingleProduct,
  saveProductItem,
  searchProduct,
  updateProduct,
};
