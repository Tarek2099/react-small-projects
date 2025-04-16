import React, { useEffect, useState } from "react";

function BasicEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const countHandler = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setName("decreament");
  };
  useEffect(() => {
    console.log("useEffect called");
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={countHandler}>Increament</button>
      <button onClick={decreament}>Decreament</button>
    </div>
  );
}

export default BasicEffect;
