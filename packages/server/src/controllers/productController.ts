import { ProductItem } from "@my-webshop/shared";
import { loadAllProducts, saveProductItem, loadSingleProduct } from "../models/product-repository";

const saveProduct = async (productitem: ProductItem): Promise<ProductItem[]> => { 
    await saveProductItem(productitem);

    return loadAllProducts();   
}

const loadProducts = async (): Promise<ProductItem[]> => {
    return await loadAllProducts();
}

const loadProductbyId = async(productId : string): Promise<ProductItem> => { 
    const product = await loadSingleProduct(productId);

    if (!product) {
        throw new Error("Product not found");
    }
    return product;
}

export {saveProduct, loadProducts, loadProductbyId};