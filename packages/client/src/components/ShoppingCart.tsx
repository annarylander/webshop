import React from "react";
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Button,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

import { BsCart3 } from "react-icons/bs";
import CartTable from "./CartTable";


export default function ShoppingCart() {
  return (
    <div>
      <Popover >
        <PopoverTrigger>
          <div className="cart-button">
          <div className="cart-amount">
              <Tag
                size="sm"
                borderRadius="full"
                variant="solid"
                colorScheme="green"
              >
                <TagLabel>0</TagLabel>
              </Tag>
            </div>
            <IconButton
              aria-label="Search database"
              colorScheme="green"
              variant="outline"
              icon={<BsCart3 />}
            />
          
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Your Shoppingcart</PopoverHeader>
          <PopoverBody>
            <CartTable />
          </PopoverBody>
          <PopoverFooter>
            <Button colorScheme="green">To checkout</Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>




    </div>
  );
}
