import { Button } from "@chakra-ui/react";
import React from "react";
import UserContext from "../context/UserContext";

export default function LogoutButton() {
  const { user } = React.useContext(UserContext);

  return (
    <>
      {user && (
        <Button colorScheme="green">
          <a href="/account">My page</a>
        </Button>
      )}
    </>
  );
}
