import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartItem } from "@my-webshop/shared";
import axios from "axios";
import React from "react";

export default function CartTable(props: {
  cartItem: CartItem | undefined;
  cartIsUpdated: () => void;
}) {
  const [cartItems, setCartItems] = React.useState<CartItem>();
  const [error, setError] = React.useState<string | undefined>();
  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  const token = localStorage.getItem("jwt");

  const handleAddOne = async (product: CartItem): Promise<void> => {
    console.log(`adding ${product} to cart`);

    const payload = product;
    try {
      await axios
        .post("order/addtocart", payload, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        })
        .then((response) => {
          setCartItems(response.data);
          props.cartIsUpdated();
        });
    } catch (error) {
      setError("Something went wrong");
    }
  };

  const handleDeleteOne = async (product: CartItem): Promise<void> => {
    const payload = {product : product};
    console.log(`deleting ${product} from cart`);
    try {
      await axios
        .patch("order/delete-item", payload, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        })
        .then((response) => {
          setCartItems(response.data);
          props.cartIsUpdated();
        });
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <div>
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Amount</Th>
              <Th>Price</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.cartItem?.products.map((item: any) => (
              <Tr key={item._id}>
                <Td>
                  <Link href={`/product/${item.productId}`}>{item.title}</Link>
                </Td>
                <Td>
                  <Button
                    alignSelf="end"
                    size="xs"
                    onClick={(e) => handleDeleteOne(item.productId)}
                  >
                    <MinusIcon w={2} h={2} />
                  </Button>
                  {item.quantity}
                  <Button
                    alignSelf="end"
                    size="xs"
                    onClick={(e) => handleAddOne(item)}
                  >
                    <AddIcon w={2} h={2} />
                  </Button>
                </Td>
                <Td>{item.price}sek</Td>
                <Td>
  
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total:</Th>
              <Th>{props.cartItem?.bill}</Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}
