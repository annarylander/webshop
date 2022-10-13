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
} from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

export default function ShoppingCart() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label="Search database"
            colorScheme="green"
            variant="outline"
            icon={<BsCart3 />}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Your Shoppingcart</PopoverHeader>
          <PopoverBody>
            <ul>
              <li>item 1</li>
            </ul>
            <ul>
              <li>item 2</li>
            </ul>
            <ul>
              <li>item 3</li>
            </ul>
          </PopoverBody>
          <PopoverFooter>
            <Button colorScheme="green">To checkout</Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </div>
  );
}
