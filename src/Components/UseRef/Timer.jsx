import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>Current Time: {seconds}</p>
    </div>
  );
};

export default Timer;
