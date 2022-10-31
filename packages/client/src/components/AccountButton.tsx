import { Button } from "@chakra-ui/react";
import React from "react";
import UserContext from "../context/UserContext";

export default function LogoutButton() {
  const { user } = React.useContext(UserContext);

  return (
    <>
      {user && (
        <Button bgColor="#447761" color="#fff">
          <a href="/account">{user.full_name}</a>
        </Button>
      )}
    </>
  );
}
