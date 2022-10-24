import { CartItem } from "@my-webshop/shared";
import axios from "axios";
import React, { useEffect } from "react";
import CartTable from "./CartTable";

export default function ListCartItems() {
  const [cartItems, setCartItems] = React.useState<CartItem>();
  const [error, setError] = React.useState<string | undefined>();

  const token = localStorage.getItem("jwt");

  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";
  /*     axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("jwt")}`; */

  //const token = localStorage.getItem("jwt");
useEffect(() => {
  axios
  .get("/order/getcart",{
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
  .then((response) => {
    setCartItems(response.data);
  })
  .catch((error) => {
    setCartItems(undefined);
    setError("No products in cart");
  });

}, [])

  
  const RenderCart = ({ cart, error }: { cart: any; error?: string }) => {
    if (error) {
      return <div>{error}</div>;
    } else if (cart) {
      return <CartTable cartItem={cart} />;
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
