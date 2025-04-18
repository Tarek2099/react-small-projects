import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";
const UserProfile = () => {
  // Using useContext hook to consume context values
  const { personName, setPersonName, personAge, setPersonAge } =
    useContext(MyContext);
  const changePerson = () => {
    setPersonName("Tarek");
    setPersonAge(30);
  };
  return (
    <>
      <h1>User Profile</h1>
      <h2>Name: {personName}</h2>
      <h2>Age: {personAge}</h2>
      <button onClick={changePerson}>Change Person</button>
    </>
  );
};

export default UserProfile;
