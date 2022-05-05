import React, { useState } from "react";

const ToDoList = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
    console.log(e)
    
  };

  const addTask = (task) => {
    let copy = [...list];
    copy.push(task);
    setList(copy);
  };
  
  return (
    <form>
        <input
          type="text"
          onChange={(e) => {setTask(e.target.value);console.log(task)}}
          placeholder="Enter your task..."
          value={task}
        />
      <button onClick={handleSubmit}>Ekle</button>
      {list.map((item) => {
          return (
              <h1>{item}</h1>
          );
      })}
    </form>
  );
};

export default ToDoList;
