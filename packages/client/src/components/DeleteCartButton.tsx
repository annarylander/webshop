import React from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { CartItem } from "@my-webshop/shared";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function DeleteCartButton(props: { cartIsUpdated: () => void }) {
  const [cartItems, setCartItems] = React.useState<CartItem>();
  const [error, setError] = React.useState<string | undefined>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  const handleDeleteCart = async (): Promise<void> => {
    try {
      await axios
        .delete("order/delete-cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => console.log("cart deleted"));
    } catch (error) {
      setError("Something went wrong deleting cart");
    }
    props.cartIsUpdated();
    onClose();
    
  };

  const token = localStorage.getItem("jwt");

  return (
    <div>
      <Button onClick={onOpen} mr={10}>
        Delete Cart
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Delete cart</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to discard all items in cart?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={(e) => handleDeleteCart()}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
