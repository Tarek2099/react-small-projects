import React from "react";
import { MyContext } from "../Context/MyContext.jsx";
import UserProfile from "./UserProfile.jsx";

const UserContext = () => {
  const [personName, setPersonName] = React.useState("John Doe");
  const [personAge, setPersonAge] = React.useState(25);
  return (
    <div>
      <MyContext.Provider
        value={{ personName, setPersonAge, personAge, setPersonName }}
      >
        <UserProfile />
      </MyContext.Provider>
    </div>
  );
};
export default UserContext;
