import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  InputRightElement,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

export default function RegisterModal() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const baseURL: string =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    axios
      .get(`${baseURL}/user/getuser`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_response) => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setIsLoggedIn(false);
      });
  }, []);

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await axios
      .post(`${baseURL}/user/create`, {
        full_name: name,
        password: password,
        email: email,
        number: number,
        address: address,
      })
      .then((response: any) => {
        const token = response.data;
        localStorage.setItem("jwt", token);
        onClose();
        window.location.reload();
      })
      .catch((e: any) => {
        setErrorText(e.response.data);
      });
  };

  return (
    <>
      {!isLoggedIn && (
        <Button onClick={onOpen} colorScheme="green">
          Sign Up
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="white" bgGradient="linear(to-bl, #447761, #000)">
          <ModalHeader fontSize="30px" textAlign="center">
            Create your account
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={6}>
              <FormLabel>Full name</FormLabel>
              <Input
                focusBorderColor="white"
                placeholder="Full name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                focusBorderColor="white"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {errorText && (
                <Text fontSize="19px" color="red">
                  {errorText}
                </Text>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Telephone number</FormLabel>
              <Input
                focusBorderColor="white"
                type="tel"
                placeholder="Telephone number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Delivery address</FormLabel>
              <Input
                focusBorderColor="white"
                placeholder="Delivery address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  focusBorderColor="white"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    colorScheme="white"
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter color="black">
            <Button
              bgColor="gray.200"
              color="#447761"
              mr={3}
              onClick={handleOnSubmit}
            >
              Create account
            </Button>
            <Button bgColor="gray.400" color="white" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
