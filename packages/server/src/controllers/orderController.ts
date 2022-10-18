import { CartItem } from "@my-webshop/shared";
import { loadAllOrders, loadSingleOrder, saveOrderItem } from "../models/orders-repository";



const saveOrder = async(orderItem: CartItem): Promise<CartItem[]> => {
    


    await saveOrderItem(orderItem);

    return loadAllOrders();

  
}

const loadOrderbyId = async(orderId : string): Promise<CartItem> => { 
    const order = await loadSingleOrder(orderId);

    if (!order) {
        throw new Error("Order not found");
    }
    return order;
}

export {saveOrder, loadOrderbyId};