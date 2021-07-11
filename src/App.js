import React, {useState} from "react";
import Form from "./components/Form";
import List from "./components/List";

//onde criar e armazenas as tarefas
export default function App() {
  const[tasks, setTask] = useState([]);

  const addTask = (task) =>{
    setTask([...tasks, task ])
  };

  const deleteTask = index => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };


  return (
    <div className="App">
      <h1>To do list</h1>
      <h3>Organize suas tarefas! (:</h3>
      <Form onSave={addTask}/>
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
