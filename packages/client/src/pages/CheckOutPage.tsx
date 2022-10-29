import React from "react";
import ListCartItems from "../components/ListCartItems";
import UserContext from "../context/UserContext";
import {
  Button,
  Box,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";

export default function CheckOutPage() {
  const { user } = React.useContext(UserContext);
  console.log("current", user);
  return (
    <div className="checkout-page">
      <Box fontWeight="semibold">
        <h1>Shoppingcart </h1>
      </Box>

      <Box mt={4}>
        <ListCartItems />
      </Box>

      {user ? (
        <Popover>
          <PopoverTrigger>
            <Button bgColor="#447761" color="#fff" mt={4}>
              Proceed to checkout
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>

            <PopoverBody>You receipt will be sent to: {user.email}</PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <div> Log in to see products</div>
      )}

      <Box mt={4} fontSize="md" color="gray.600">
        We accept: <Icon as={FaCcPaypal} /> <Icon as={FaCcVisa} />{" "}
        <Icon as={FaCcMastercard} />
      </Box>
    </div>
  );
}
