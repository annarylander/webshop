import { ProductItem } from "@my-webshop/shared";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";

export default function Receipt(props: { product: ProductItem }) {
  console.log(props.product);
  return (
    <div className="receipt-table">
      <TableContainer mt={4}>
        <Table variant="simple" size="sm">
          <Tbody>
            <Tr>
              <Td>{props.product.title}</Td>
              <Td>{props.product.price} SEK</Td>
              <Td>{props.product.quantity}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
