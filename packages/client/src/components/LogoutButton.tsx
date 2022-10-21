import { Button } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function LogoutButton() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    
    const token = localStorage.getItem("plantshop")
    const baseURL: string =
    process.env.REACT_APP_BASE_URL || "http://localhost:3002";


    useEffect(() => {
      axios
        .get(`${baseURL}/user/getuser`, {
          headers: { 
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}` }})
        .then((_response) => {
          setIsLoggedIn(true);
        })
        .catch((error) => {
        //   console.log(error)
          setIsLoggedIn(false)
        });
    }, []);

    const logout=()=>{
        localStorage.clear()
        window.location.reload()
    }

  return (
    <>
    {isLoggedIn && 
        <Button onClick={logout} colorScheme="green">Logout</Button> }
  </>  
  )
}
