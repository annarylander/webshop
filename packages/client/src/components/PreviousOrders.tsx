import { CartItem, ProductItem } from "@my-webshop/shared";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
        console.log(response.data);
      })
      .catch((error) => {
        setError("No previous orders");
        console.log(error);
      });
  }

  return (
    <div className="previous-orders">
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Amount</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems &&
              cartItems.map((item) => {
                return (
                  <div>
                    <Td>{item.bill} sek</Td>
                  </div>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
