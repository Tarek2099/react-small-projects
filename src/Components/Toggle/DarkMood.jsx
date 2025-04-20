import React, { useState } from "react";

const DarkMood = () => {
  const [background, setBackground] = useState("white");
  const [color, setColor] = useState("black");
  const changeHandler = () => {
    setBackground(background === "white" ? "black" : "white");
    setColor(color === "black" ? "white" : "black");
  };
  return (
    <div style={{ background, width: "100%", height: "100vh", color }}>
      <h1 style={{ color }}>Welcome to the dark world</h1>
      <button onClick={changeHandler} style={{ color }}>
        Change
      </button>
    </div>
  );
};

export default DarkMood;
