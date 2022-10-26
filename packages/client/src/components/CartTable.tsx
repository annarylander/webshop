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
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartItem, ProductItem } from "@my-webshop/shared";
import React, { useReducer } from "react";
import {cartReducer, initialState} from './context/cartReducer'

export default function CartTable(props: { cartItem: CartItem }) {


  const [state, dispatch] = useReducer(cartReducer, initialState);

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
                <Td>
                  <Button
                    alignSelf="end"
                    size="xs"
                    onClick={() => dispatch({type: 'DELETE_PRODUCT', payload: -1})}
                  >
                    <MinusIcon w={3} h={3} />
                  </Button>
                  {item.quantity}
                  <Button
                    alignSelf="end"
                    size="xs"
                    onClick={() => dispatch({type: 'ADD_PRODUCT', payload: 1})}
                  >
                    <AddIcon />
                  </Button>
                </Td>
                <Td>{item.price}sek</Td>
                <Td>
             {/*      <Button alignSelf="end" size="xs">
                    <DeleteIcon w={3} h={3} />
                  </Button> */}
                </Td>
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
