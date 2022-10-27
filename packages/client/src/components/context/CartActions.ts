import axios from 'axios';
import { returnErrors } from './errorActions';
import { GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING } from './types';
// import { cartReducer, initialState } from "./context/CartReducer";
// const token = localStorage.getItem("jwt");


// const [state, dispatch] = (cartReducer, initialState);

axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  axios.defaults.headers.common['Authorization'] = localStorage.getItem("jwt");

export const getCart = () => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(setCartLoading());
    axios.get(`/order/getCart`)
        .then(res => dispatch({
            type: GET_CART,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addToCart = (productId : string, quantity : number) => (dispatch: (arg0: { type: string; payload: any; }) => any) => {
    axios.post(`/order/addtocart`, {productId, quantity})
        .then(res => dispatch({
            type: ADD_TO_CART,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteFromCart = (productId : string) => (dispatch: (arg0: { type: string; payload: any; }) => any) => {
    axios.delete(`/cart/deleteitem`)
        .then(res => dispatch({
            type: DELETE_FROM_CART,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setCartLoading = () => {
    return{
        type: CART_LOADING
    }
}