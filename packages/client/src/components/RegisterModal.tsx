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
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function RegisterModal() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>();
  const [adress, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // const handleOnSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault()

  //   await axios.post('http://localhost:4000/register', {
  //     username: username,
  //     password: password,
  //     email: email,
  //   })
  //   .then((data:any) => {
  //     navigate("/home")
  //   })
  //   .catch((e:any) => {
  //     setErrorText(e.response.data)
  //   });
  // }

  return (
    <>
      <Button onClick={onOpen} colorScheme="green">
        Sign Up
      </Button>

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
                value={adress}
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
            <Button bgColor="gray.200" color="#447761" mr={3}>
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
