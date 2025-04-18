import React from "react";

const User = ({ user, deleteHandler }) => {
  const { id, name, email } = user;
  const styling = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    margin: "10px",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
  };
  const getIDHandler = (id) => {
    // Function to delete the user
    deleteHandler(id);
  };
  return (
    <div style={styling}>
      <h2>User ID: {id}</h2>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <button onClick={() => getIDHandler(id)}>Delete</button>
    </div>
  );
};

export default User;
