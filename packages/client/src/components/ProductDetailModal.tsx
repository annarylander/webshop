import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Link,
} from "@chakra-ui/react";
import DetailView from "./DetailView";
import { ProductItem } from "@my-webshop/shared";
export default function ProductDetailModal(props: {
  product: ProductItem;
  error?: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div>
      {" "}
      <Link onClick={onOpen}>{props.product.title}</Link>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <DetailView product={props.product} error={props.error} />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
