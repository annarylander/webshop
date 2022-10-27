import { CartItem, ProductItem } from "@my-webshop/shared";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React, { useEffect } from "react";
import CartTable from "./CartTable";
//import { getCart, deleteFromCart, addToCart } from "./context/cartActions";
import { cartReducer, initialState } from "./context/CartReducer";

export default function ListCartItems() {
  const [cartItems, setCartItems] = React.useState<CartItem | undefined>();
  const [error, setError] = React.useState<string | undefined>();
  //const {quantity, setQuantity} = React.useState<number>(0); // This is the quantity of the product in the cart
 // const [state, dispatch] = (cartReducer, initialState);

  /*   function increase() {
    dispatch({type: ACTIONS.INCREASE})
  }	

  function decrease() {
    dispatch({type: ACTIONS.DECREASE})
  } */

  const token = localStorage.getItem("jwt");

  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  useEffect(() => {
   getCart()
  }, []);

  function getCart() {
    axios
    .get("/order/getcart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setCartItems(response.data);
    })
    .catch((error) => {
      setCartItems(undefined);
      setError("No products in cart");
    });
  }

/*   const handleDeleteFromCart = async (productId: string): Promise<void> => { 
    await deleteFromCart(productId);
   }

   const handleAddToCart = async (productId: string): Promise<void> => {
    await addToCart(productId, 1);
  }
    } */

   /* const handleAddOne = async (product: ProductItem): Promise<void> => {
    console.log(`adding ${product.title} to cart`);
    try {
      await axios.post("order/addtocart", product._id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCartItems(response.data)
        setQuantity(+1)
      });
    } catch (error) {
      setError("Something went wrong adding to cart");
    }
  }; */

  const handleDeleteOne = async (product: ProductItem): Promise<void> => {
    console.log(`adding ${product.title} to cart`);
    try {
      await axios.post("order/deleteitem", product._id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      setError("Something went wrong adding to cart");
    }
  };
 
  const RenderCart = ({ cart, error }: { cart?: CartItem; error?: string }) => {
    if (error) {
      return <div>{error}</div>;
    } else if (cart) {
      return (
        <CartTable
          cartItem={cart}
          cartIsUpdated={getCart}
        />
      );
    } else {
      return <div>Cart is empty</div>;
    }
  };
  return (
    <div>
      <RenderCart cart={cartItems} error={error} />
    </div>
  );
}
