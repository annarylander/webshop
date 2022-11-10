import { Button } from "@chakra-ui/react";
import React from "react";
import UserContext from "../context/UserContext";

export default function LogoutButton() {
  const { user } = React.useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {user && (
        <Button onClick={logout} bgColor="#447761" color="#fff">
          Logout
        </Button>
      )}
    </>
  );
}
