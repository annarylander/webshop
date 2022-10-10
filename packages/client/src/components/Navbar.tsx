import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2" p="2">
        <Box p="2">
          <Heading size="lg">PLANT SHOP 🌱</Heading>
        </Box>
        <Spacer />

        <ButtonGroup gap="2">
          <Button size="sm" bgColor="#447761" color="white">
            Sign Up
          </Button>
          <Button size="sm" bgColor="#447761" color="white">
            Log in
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
