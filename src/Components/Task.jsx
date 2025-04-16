import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const inputHandler = (event) => {
    setTask(event.target.value);
  };
  const submitHandler = () => {
    if (task.trim() !== "") {
      setTasks((previousTasks) => [...previousTasks, task]);
      setTask(""); // Clear the input field after adding the task
    }
  };
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input
        type="text"
        value={task}
        placeholder="New Task"
        onChange={inputHandler}
      ></input>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default Task;
