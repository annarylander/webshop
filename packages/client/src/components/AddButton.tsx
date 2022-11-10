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
import { ProductItem } from "@my-webshop/shared";
import axios from "axios";
import React, { useState } from "react";
import UserContext from "../context/UserContext";

export default function AddButton() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string[]>();
  const [weight, setWeight] = useState<string>("");
  const [manufacturer, setmMnufacturer] = useState<string>("");
  const [mainImage, setMainImage] = useState<string>("");
  const { user } = React.useContext(UserContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const baseURL: string =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  const token = localStorage.getItem("jwt");

  function checkIfEmptyField() {
    let payload: any = {
      title: title,
      price: price,
      description: description,
      category: category,
      weight: weight,
      manufacturer: manufacturer,
      mainImage: mainImage,
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
      .post(`${baseURL}/product/`, payload, {
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
      {user?.role === "admin" && (
        <>
          <Button onClick={onOpen} bgColor="#447761" color="#fff">
            Add Product
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              color="white"
              bgGradient="linear(to-bl, #447761, #000)"
            >
              <ModalHeader fontSize="30px" textAlign="center" mb="0">
                Add Product Info
                <Text fontSize="md" mt={4}>
                  Fill in the information you want to add.
                </Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl mt={2}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    focusBorderColor="white"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="number"
                    focusBorderColor="white"
                    placeholder="Price"
                    // onChange={(e) => setPrice(e.target.value as number)}
                    value={price}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Input
                    focusBorderColor="white"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Category</FormLabel>
                  <InputGroup size="md">
                    <Input
                      focusBorderColor="white"
                      placeholder="Category"
                      onChange={(e) => setCategory([e.target.value])}
                      value={category}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Weight</FormLabel>
                  <Input
                    focusBorderColor="white"
                    placeholder="Weight"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Manufacturer</FormLabel>
                  <Input
                    focusBorderColor="white"
                    placeholder="Manufacturer"
                    onChange={(e) => setmMnufacturer(e.target.value)}
                    value={manufacturer}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Image</FormLabel>
                  <Input
                    focusBorderColor="white"
                    placeholder="Image"
                    onChange={(e) => setMainImage(e.target.value)}
                    value={mainImage}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter color="black">
                <Button
                  bgColor="gray.200"
                  color="#447761"
                  mr={3}
                  onClick={handleOnSubmit}
                >
                  Add
                </Button>
                <Button bgColor="gray.400" color="white" onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}
