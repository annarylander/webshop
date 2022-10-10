import { ProductItem } from "@my-webshop/shared";
import { loadAllProducts, saveProductItem } from "../models/product-repository";

const saveProduct = async (productitem: ProductItem): Promise<ProductItem[]> => { 
    await saveProductItem(productitem);

    return loadAllProducts();   
}

const loadProducts = async (): Promise<ProductItem[]> => {
    return await loadAllProducts();
}

export {saveProduct, loadProducts};