import React from "react";
import User from "./User";

const Users = ({ users, deleteHandler }) => {
  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} deleteHandler={deleteHandler} />
      ))}
    </>
  );
};

export default Users;
