import { Button } from "@chakra-ui/react";
import React from "react";
import UserContext from "../context/UserContext";

export default function AdminButton() {
  const { user } = React.useContext(UserContext);

  return (
    <>
      {user?.role === "admin" && (
        <Button bgColor="#447761" color="#fff">
          <a href="/admin">Admin page</a>
        </Button>
      )}
    </>
  );
}
