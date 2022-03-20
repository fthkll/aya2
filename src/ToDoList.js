import React, { useState } from "react";
import { Button, FormGroup, FormInput, Form } from "shards-react";

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
    <Form>
      <FormGroup>
        <FormInput
          onChange={(e) => {setTask(e.target.value);console.log(task)}}
          placeholder="Enter your task..."
          value={task}
        />
      </FormGroup>
      <Button onClick={handleSubmit}>Ekle</Button>
      {list.map((item) => {
          return (
              <h1>{item}</h1>
          );
      })}
    </Form>
  );
};

export default ToDoList;
