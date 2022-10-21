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
        console.log(error)
      });
  }, []);

  
  return <>
    <Text fontSize='5xl' color='black'>AccountPage</Text>
    <Grid
      h='100vh'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg='lightgreen'>
        <Text fontSize='2xl' color='white'>{user && user.full_name}</Text>
        
        <Image
          borderRadius='full'
          boxSize='150px'
          ml='110px'
          mt='10px'
          src='https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
          alt='Sunflower'
        />
        <Box maxW='sm' borderWidth='5px' borderRadius='lg' overflow='hidden' mt='10px' ml='10px' mr='10px'>
          <Text>{user && user.full_name}</Text>
          <Text>{user && user.email}</Text>
          <Text>{user && user.address}</Text>
          <Text>{user && user.phone_number}</Text>
        </Box>

      </GridItem>
      <GridItem colSpan={2} bg='lightgray'>
        <Text as='u' fontSize='2xl' color='white'>Shopping cart</Text>
      </GridItem>
      <GridItem colSpan={2} bg='lightgray'>
        <Text as='u' fontSize='2xl' color='white'>Previous orders</Text>
      </GridItem>
      <GridItem colSpan={4} bg='lightgreen'></GridItem>
    </Grid>
  </>
}
