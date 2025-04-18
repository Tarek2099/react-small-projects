import React from "react";
import { useContextHook } from "../Hooks/useContextHook";
import User from "./User";

const Users = () => {
  const { users } = useContextHook();
  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;
