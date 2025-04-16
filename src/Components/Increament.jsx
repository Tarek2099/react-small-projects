import React, { useState } from "react";

const Increament = () => {
  const users = ["John ", "Doe ", "Jane ", "Smith "];
  const [user, setUser] = useState(users);

  const addHandler = () => {
    const newUser = users[Math.floor(Math.random() * users.length)];
    setUser((previousUsers) => [...previousUsers, newUser]);
    console.log(users);
  };
  return (
    <div>
      <h1>{user}</h1>
      <button onClick={addHandler}>Add More</button>
    </div>
  );
};

export default Increament;
