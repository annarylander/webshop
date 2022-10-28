import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  IconButton
} from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import ListCartItems from "./ListCartItems";

export function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div>
      <>
      <IconButton            
      aria-label="Search database"
              colorScheme="green"
              variant="outline"
              icon={<BsCart3 />}
              onClick={onOpen}
              ref={btnRef} 
            />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size="sm"
          finalFocusRef={btnRef} 
          >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>

            <DrawerBody>
              <ListCartItems />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3}>
                Delete all items
              </Button>
              <Button colorScheme="green">Go to checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
}
