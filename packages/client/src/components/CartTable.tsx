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
} from "@chakra-ui/react";

import React from "react";

export default function CartTable() {
  return (
    <div>
      <TableContainer>
        <Table variant="simple" size='sm'>
    
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Amount</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Product 1</Td>
              <Td>1</Td>
              <Td isNumeric>199 sek</Td>
            </Tr>
           
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th>Total</Th>
              <Th >199</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}
