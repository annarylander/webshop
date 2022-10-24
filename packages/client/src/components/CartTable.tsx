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
} from "@chakra-ui/react";
import { CartItem, ProductItem } from "@my-webshop/shared";

import React from "react";

export default function CartTable(props: { cartItem: CartItem }) {
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
            {props.cartItem.products.map((item: any) => (
              <Tr key={item._id}>
                <Td>
                  <Link href={`/product/${item.productId}`}>{item.title}</Link>
                </Td>
                <Td>{item.quantity}</Td>
                <Td>{item.price}sek</Td>
                <Td>x</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total:</Th>
              <Th>{props.cartItem.bill}</Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}
