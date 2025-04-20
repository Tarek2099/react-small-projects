import React, { useRef } from "react";

const FocusInput = () => {
  const reference = useRef(null);
  const handleFocus = () => {
    const currentValue = reference.current.value;
    console.log(currentValue);
  };
  return (
    <div>
      <input type="text" ref={reference} placeholder="Focus on me" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
