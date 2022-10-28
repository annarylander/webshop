import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function CheckOutPage() {
  const { user } = React.useContext(UserContext);
  console.log("checked out", user);
  return (
    <div>
      <h1>Checkout page</h1>
      <div>is logged in: {user?.email}</div>
      <p>{user?.full_name}</p>
    </div>
  );
}
