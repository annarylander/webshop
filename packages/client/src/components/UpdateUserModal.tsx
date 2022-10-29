import { EditIcon } from "@chakra-ui/icons";
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
  Text,
  InputGroup,
} from "@chakra-ui/react";

import axios from "axios";
import React, { useState } from "react";

export default function UpdateUserModal() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const baseURL: string =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  const token = localStorage.getItem("jwt");

  function checkIfEmptyField() {
    let payload: any = {
      full_name: name,
      email: email,
      phone_number: number,
      address: address,
    };

    Object.keys(payload).forEach((key) => {
      if (payload[key] === "") {
        delete payload[key];
      }
    });

    return payload;
  }

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const payload = checkIfEmptyField();

    await axios
      .put(`${baseURL}/user/update`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res: any) => {
        const token = res.data;
        localStorage.setItem("jwt", token);
        onClose();
        window.location.reload();
      })
      .catch((e: any) => {
        console.log(e.response.data, "Error");
      });
  };

  return (
    <>
      <Button onClick={onOpen} alignSelf="end" size="xs">
        <EditIcon w={6} h={6} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="white" bgGradient="linear(to-bl, #447761, #000)">
          <ModalHeader fontSize="30px" textAlign="center" mb="0">
            Update user info
            <Text fontSize="md" mt={4}>
              Fill in what you want to update and leave the other inputs blank.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={2}>
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
              <InputGroup size="md">
                <Input
                  focusBorderColor="white"
                  placeholder="Delivery address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
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
              Update
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
