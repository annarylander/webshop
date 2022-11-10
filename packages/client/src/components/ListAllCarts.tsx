import { CartItem } from "@my-webshop/shared";
import axios from "axios";
import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import ChangeStatus from "./ChangeStatus";

export default function ListAllCarts() {
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
      .get("/order/all-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        setCart(undefined);
        setError("No products in cart");
      });
  }

  return (
    <div className="previous-orders">
      <TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th>Amount</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems &&
              cartItems.map((item: any) => {
                return (
                  <div key={item._id}>
                    <Td>Total: {item.bill} sek</Td>
                    <Td>Customer: {item.user}</Td>
                    <Td>
                      Status: {item.status}
                      <ChangeStatus orderId={item._id}/>
                    </Td>
                  </div>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
