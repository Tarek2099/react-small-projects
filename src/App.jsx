import React, { useState } from "react";
import AddUser from "./Components/UserManagement/AddUser.jsx";
import Users from "./Components/UserManagement/Users.jsx";
const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com" },
    { id: 3, name: "Alice Johnson", email: "alice@gamil.com" },
    { id: 4, name: "Bob Brown", email: "bob@gmail.com" },
  ]);
  const deleteHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    console.log(newUsers);
    setUsers(newUsers);
  };
  const getNewUser = (user) => {
    setUsers((previousUsers) => [...previousUsers, user]);
  };
  return (
    <div className="app-container">
      <Users users={users} deleteHandler={deleteHandler} />
      <AddUser getNewUser={getNewUser} />
    </div>
  );
};

export default App;
