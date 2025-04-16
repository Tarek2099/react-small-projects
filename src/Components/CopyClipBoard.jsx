import React, { useState } from "react";

const CopyClipBoard = () => {
  const [text, setText] = useState("");
  const inputHandler = (event) => {
    setText(event.target.value);
  };
  const copyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  };
  return (
    <div>
      <h1>Copy ClipBoard</h1>
      <input type="text" placeholder="Copy this text" onChange={inputHandler} />
      <button onClick={copyText}>Copy to Clipboard</button>
    </div>
  );
};

export default CopyClipBoard;
