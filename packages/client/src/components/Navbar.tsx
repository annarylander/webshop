import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Navbar() {
  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2" p="2">
        <Box p="2">
          <Heading size="lg"><a href="/">PLANT SHOP 🌱</a></Heading>
        </Box>
        <Spacer />

        <ButtonGroup gap="2">
          <LoginModal />
          <RegisterModal />
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
