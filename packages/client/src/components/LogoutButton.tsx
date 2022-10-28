import { Button } from "@chakra-ui/react";
import React from "react";
import UserContext from "../context/UserContext";

export default function LogoutButton() {
  const { user } = React.useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    console.log("user logged out");
  };

  return (
    <>
      {user && (
        <Button onClick={logout} colorScheme="green">
          Logout
        </Button>
      )}
    </>
  );
}
