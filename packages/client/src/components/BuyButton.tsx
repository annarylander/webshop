import { Button } from "@chakra-ui/react";
import { CartItem, ProductItem } from "@my-webshop/shared";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export default function BuyButton(props: { product: ProductItem }) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [error, setError] = React.useState<string | undefined>();

  const token = localStorage.getItem("jwt")

  const cartURL: string =
    `${process.env.REACT_APP_BASE_URL}/order/addtocart` ||
    `http://localhost:3002/order/addtocart`;

  const handleAddToCart = async (product: ProductItem): Promise<void> => {
    console.log(`adding ${product.title} to cart`);

    const payload = [
      {
        productId: product._id || "",
        title: product.title,
        price: product.price,
        quantity: 1,
      },
    ];

    try {
      await axios.post(cartURL, payload, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
    } catch (error) {
      setError("Something went wrong adding to cart");
    }
  };

  return (
    <div>
      <Button
        colorScheme="green"
        onClick={(e) => handleAddToCart(props.product)}
      >
        Add to cart
      </Button>
    </div>
  );
}
