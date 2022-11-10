import { ProductItem } from "@my-webshop/shared";
import {
  loadAllProducts,
  saveProductItem,
  loadSingleProduct,
  searchProduct,
  updateProduct,
} from "../models/product-repository";

const saveProduct = async (
  productitem: ProductItem
): Promise<ProductItem[]> => {
  await saveProductItem(productitem);

  return loadAllProducts();
};

const loadProducts = async (): Promise<ProductItem[]> => {
  return await loadAllProducts();
};

const loadProductbyId = async (productId: string): Promise<ProductItem> => {
  const product = await loadSingleProduct(productId);

  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

const getSearchResult = async (query: string): Promise<ProductItem[]> => {
  const searchResult = await searchProduct(query);
  if (!searchResult) {
    throw new Error("Product not found");
  }
  return searchResult;
};

const updateProductController = async (
  id: string,
  product: ProductItem
): Promise<ProductItem> => {
  const updatedProduct = await updateProduct(id, product);
  if (!updatedProduct) {
    throw new Error("Product not found");
  }
  return updatedProduct;
};

export {
  saveProduct,
  loadProducts,
  loadProductbyId,
  getSearchResult,
  updateProductController,
};
