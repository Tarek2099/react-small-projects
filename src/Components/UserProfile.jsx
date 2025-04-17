import React, { useContext } from "react";
import { Data } from "./UserContext";
const UserProfile = () => {
  // Using useContext hook to consume context values
  const { name } = useContext(Data);
  return (
    <>
      <Data.Consumer>
        <div>
          <h1>User Profile</h1>
          <p>Name: {name}</p>
          <p>Age: </p>
        </div>
      </Data.Consumer>
    </>
  );
};

export default UserProfile;
