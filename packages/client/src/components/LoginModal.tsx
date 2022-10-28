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
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function LoginModal() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { user, setUser } = useContext(UserContext);

  const baseURL: string =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    axios
      .get(`${baseURL}/user/getuser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_response) => {
        setIsLoggedIn(true);
        setUser(_response.data);
        console.log(_response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(false);
      });
  }, []);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await axios
      .post(`${baseURL}/user/login`, {
        password: password,
        email: email,
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
          Login
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="white" bgGradient="linear(to-bl, #447761, #000)">
          <ModalHeader fontSize="30px" textAlign="center">
            Welcome back!
          </ModalHeader>
          <ModalHeader fontSize="25px" textAlign="center">
            Login
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {errorText && (
              <Text fontSize="19px" color="red">
                {errorText}
              </Text>
            )}
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                focusBorderColor="white"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
              onClick={handleLogin}
            >
              Login
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
