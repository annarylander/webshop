import {
  Box,
  Flex,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import AccountButton from "./AccountButton";
import { DrawerExample } from "./CartDrawer";
import LoginModal from "./LoginModal";
import LogoutButton from "./LogoutButton";
import RegisterModal from "./RegisterModal";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  return (
    <Box>
      <img src=".././src/assets/plantshop-logo.jpg" alt="" />
      <Flex minWidth="max-content" alignItems="center" gap="2" p="2">
        <Box padding='2'>
          <Heading size="lg">
            <a href="/">PLANT SHOP 🌱</a>
          </Heading>
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
              <AccountButton/>
            </div>
            <div>
              <LogoutButton />
            </div>
            <div>
              <ShoppingCart />
            </div>
            <div>
              <DrawerExample />
            </div>
        </Flex>
      </Flex>
    </Box>
  );
}
