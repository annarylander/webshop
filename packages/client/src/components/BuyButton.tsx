import { Button } from "@chakra-ui/react";
import { CartItem, ProductItem } from "@my-webshop/shared";
import axios from "axios";
import React from "react";
import UserContext from "../context/UserContext";

export default function BuyButton(props: { product: ProductItem }) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [error, setError] = React.useState<string | undefined>();
  const { user } = React.useContext(UserContext);
  
  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";
  const token = localStorage.getItem("jwt");

  const handleAddToCart = async (product: ProductItem): Promise<void> => {
        const payload = {
      productId: product._id,
      title: product.title,
      price: product.price,
      quantity: 1,
    };

    try {
      await axios.post("/order/addtocart", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {console.log('response from add to cart', response.data)}) 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div> 
      {user?.role === "customer" && (     
        <Button
          bgColor="#447761"
          color="#fff"
          onClick={(e) => handleAddToCart(props.product)}
        >
          Add to cart
        </Button>
    )}
    </div>
  );
}
