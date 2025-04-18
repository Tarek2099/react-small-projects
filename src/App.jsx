import React from "react";
import AddUser from "./Components/UserManagement/AddUser.jsx";
import Users from "./Components/UserManagement/Users.jsx";
import ContextProvider from "./Context/MyContext.jsx";
const App = () => {
  return (
    <ContextProvider>
      <div className="app-container">
        <Users />
        <AddUser />
      </div>
    </ContextProvider>
  );
};

export default App;
