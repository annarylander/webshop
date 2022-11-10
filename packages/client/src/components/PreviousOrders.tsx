import { CartItem, ProductItem } from "@my-webshop/shared";
import axios from "axios";
import React, { useEffect, useState } from "react";

import ReceiptList from "./ReceiptList";

export default function PreviousOrders() {
  const [cartItems, setCart] = React.useState<CartItem[] | undefined>([]);
  const [error, setError] = React.useState<string | undefined>();
  const token = localStorage.getItem("jwt");

  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
    axios
      .get("/order/previous-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        setError("No previous orders");
        console.log(error);
      });
  }

  return (
    <div className="previous-orders">
      <ReceiptList cartItems={cartItems} />
    </div>
  );
}
