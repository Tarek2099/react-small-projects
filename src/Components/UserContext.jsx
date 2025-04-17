import React from "react";
// import { MyContext } from "../Context/MyContext.jsx";
import UserProfile from "./UserProfile.jsx";

export const Data = React.createContext();
const UserContext = () => {
  const personName = "John Doe";
  return (
    <div>
      <Data.Provider value={personName}>
        <UserProfile />
      </Data.Provider>
    </div>
  );
};
export default UserContext;
