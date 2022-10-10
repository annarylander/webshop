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
  InputRightElement
} from '@chakra-ui/react'
import React, { useState } from 'react'

export default function LoginModal() { 
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorText, setErrorText] = useState<string>("")

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

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
      <Button onClick={onOpen} colorScheme='green'>Login</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent color="white" bgGradient='linear(to-bl, gray.400, gray.500)'>
          <ModalHeader fontSize='30px' textAlign="center">Welcome back!</ModalHeader>
          <ModalHeader fontSize='25px' textAlign="center">Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input 
                focusBorderColor='white' 
                placeholder='Email' 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
          </FormControl>

          <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                  focusBorderColor='white'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <InputRightElement width='4.5rem'>
                  <Button colorScheme="white" h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter color="black">
            <Button colorScheme='green' mr={3}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}