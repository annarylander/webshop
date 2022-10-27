import {
  GET_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CART_LOADING,
} from "./types";

export interface productQuantity {
    productQuantity: number;
}

export type Action =    
    | { type: 'ADD_TO_CART'; payload: []}
    | { type: 'DELETE_FROM_CART'; payload: []}
    | { type: 'CART_LOADING'; payload: []}
    | { type: 'GET_CART'; payload: [] }


export const initialState = {
  cart: null,
  loading: false,
};

export function cartReducer (state = initialState, action : Action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      }
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case CART_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

/* import { CartItem, ProductItem } from "@my-webshop/shared";

export interface productQuantity {
    productQuantity: number;
}

export type Action =
    | { type: 'ADD_PRODUCT'; payload: 1 }
    | { type: 'DELETE_PRODUCT', payload: -1 };

export const initialState: productQuantity = {
    productQuantity: 0,
};

export function cartReducer(state: productQuantity, action: Action): productQuantity {
    switch (action.type) {
        case 'ADD_PRODUCT':
           // return { ...state, counter: action.payload };
            return addProductToCart(action.payload, state);
        case 'DELETE_PRODUCT':
            return { ...state, counter: action.payload };
        default:
            return state;
    }
}

const addProductToCart = (cartItem: CartItem, state : productQuantity) => {
    console.log("adding product", cartItem.products[0].title);
    const productId = cartItem.products[0].productId;
    const updatedCart = [...state.productQuantity];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );
  
    if (updatedItemIndex < 0) {
      updatedCart.push({ productId, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
  
    return { ...state, cart: updatedCart };
  }; */
