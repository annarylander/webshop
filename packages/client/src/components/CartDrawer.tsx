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
  IconButton,
} from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import ListCartItems from "./ListCartItems";
import DeleteCartButton from "./DeleteCartButton";
import axios from "axios";
import { CartItem } from "@my-webshop/shared";

export function CartDrawer() {
  const [cartItems, setCartItems] = React.useState<CartItem | undefined>();
  const [error, setError] = React.useState<string | undefined>();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const token = localStorage.getItem("jwt");

  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    getCart()
   }, []);
 
  function getCart() {
    axios
      .get("/order/getcart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setIsLoggedIn(true)
        setCartItems(response.data);
      })
      .catch((error) => {
        setIsLoggedIn(false)
        setCartItems(undefined);
        setError("No products in cart");
      });
  }

  return (
    <div>
      <>
      {isLoggedIn && (
        <IconButton
          aria-label="Search database"
          colorScheme="green"
          variant="outline"
          icon={<BsCart3 />}
          onClick={onOpen}
          ref={btnRef}
        />
        )}
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
              <DeleteCartButton cartIsUpdated={getCart} />
              <Button colorScheme="green"> <a href="/checkout">Go to checkout</a></Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
}
