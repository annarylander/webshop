import { CartItem, ProductItem } from "@my-webshop/shared";
import axios from "axios";
import React, { useEffect } from "react";
import CartTable from "./CartTable";

export default function ListCartItems() {
  const [cartItems, setCartItems] = React.useState<CartItem | undefined>();
  const [error, setError] = React.useState<string | undefined>();
  const token = localStorage.getItem("jwt");

  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  useEffect(() => {
    getCart();
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

  const RenderCart = ({ cart, error }: { cart?: CartItem; error?: string }) => {
    if (error) {
      return <div>{error}</div>;
    } else if (cart) {
      return <CartTable cartItem={cart} cartIsUpdated={getCart} />;
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
