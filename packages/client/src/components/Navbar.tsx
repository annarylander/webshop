import {
  Box,
  Flex,
  Spacer,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2" p="2">
        <Box p="2">
          <Heading size="lg"><a href="/">PLANT SHOP 🌱</a></Heading>
        </Box>
        <Spacer />

        <Flex alignItems='flex-end' gap="2">
         
            <div>
              <LoginModal />
            </div>
            <div>
              <RegisterModal />
            </div>
            <div>
              <ShoppingCart />
            </div>
       
        </Flex>
      </Flex>
    </Box>
  );
}
