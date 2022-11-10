import { EditIcon } from '@chakra-ui/icons'
import { 
    Button, 
    Modal, 
    ModalOverlay, 
    useDisclosure,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Select
 } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

export default function ChangeStatus(props: { orderId: string }) {
    const [status, setStatus] = useState<string>("");
    const { isOpen, onOpen, onClose } = useDisclosure();

    const baseURL: string =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";

  const token = localStorage.getItem("jwt");
  
    const handleOnSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const payload = { status: status }
    
        await axios
          .put(`${baseURL}/order/${props.orderId}`, payload, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res: any) => {
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
            <EditIcon w={4} h={4} />
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="white" bgGradient="linear(to-bl, #447761, #000)">
          <ModalHeader fontSize="30px" textAlign="center" mb="0">
            Update order status
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl mt={2}>
              <FormLabel>Status</FormLabel>
              <Select placeholder='Select option' onChange={(e) => setStatus(e.target.value)} color="black" bg="white">
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </Select>
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
  )
}
