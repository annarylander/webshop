import React, { useEffect, useState } from "react";
import { 
  Grid,
  GridItem,
  Image,
  Text,
  Box
} from "@chakra-ui/react";
import axios from "axios";
import { UserItem } from "@my-webshop/shared";
import CartTable from "../components/CartTable";
import ListCartItems from "../components/ListCartItems";
import UpdateUserModal from "../components/UpdateUserModal";

export default function AccountPage() {
  const [user, setUser] = useState<UserItem>();

  const baseURL: string =
  process.env.REACT_APP_BASE_URL || "http://localhost:3002";

const token = localStorage.getItem("jwt")

  useEffect(() => {
    axios
      .get(`${baseURL}/user/getuser`, {
        headers: { 
          "authorization": `Bearer ${token}` }})
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setUser(undefined);
      });
  }, []);

  
  return <>
    <Grid
      h='100vh'
      templateRows='repeat(6, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={6} colSpan={1} bgColor='gray.100' borderRadius='lg' display='flex' flexDirection='column' alignItems='center'>
        
        <Image
          boxShadow='dark-lg'
          borderRadius='full'
          boxSize='150px'
          mt='25px'
          src='https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
          alt='Sunflower'
        />
        <Text fontSize='2xl' color='black' mt="25px">{user && user.full_name}</Text>
        <Box display='flex' flexDirection='column' alignItems='flex-start' boxShadow='2xl' maxW='sm' borderWidth='5px' borderRadius='lg' overflow='hidden' p='30px' m='10px' >
          <Text as='b'>Name:</Text>
          <Text mb='10px'> {user && user.full_name} </Text>
          <Text as='b'>Email:</Text>
          <Text mb='10px'>{user && user.email}</Text>
          <Text as='b'>Address:</Text> 
          <Text mb='10px'> {user && user.address}</Text>
          <Text as='b'>Mobile phone:</Text>
          <Text> {user && user.phone_number}</Text>

          <UpdateUserModal/>        
        </Box>

      </GridItem>
      
      <GridItem boxShadow='2xl' colSpan={4} rowSpan={2} borderRadius='lg' className='accountPageBanner'>
        <Text fontSize='5xl'>Account page</Text>
      </GridItem>

      <GridItem boxShadow='2xl' colSpan={2} rowSpan={4} borderRadius='lg' borderColor='green' bgColor='gray.300'>
        <Text as='u' fontSize='2xl' color='black'>Shopping cart</Text>
         <ListCartItems />
  
      </GridItem>

      <GridItem boxShadow='2xl' colSpan={2} rowSpan={4} borderRadius='lg' borderColor='green' bgColor='gray.300'>
        <Text as='u' fontSize='2xl' color='black'>Previous orders</Text>
      </GridItem >
    </Grid>
  </>
}
