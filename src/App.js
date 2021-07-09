import React, {useState} from 'react';

//onde criar e armazenas as tarefas
export default function App() {
  const[tasks, setTask] = useState([]);

  const addTask = (task) =>{
    setTask([...tasks, task ])
  };


  return (
    <div className="App">
      <h1>To do list</h1>
      <h3>Organize suas tarefas! (:</h3>
      <Form onSave={addTask}/>
      <List tasks={tasks}/>
    </div>
  );
}

export function Form(props) {
  const {onSave} = props;

  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" placeholder="Qual é a tarefa?" onChange={e => setText(e.currentTarget.value)} />
      <button name="enviar" onClick={()=> onSave(text)}> Enviar </button>
    </div>
  );
}

//mapear cada item que tenho lista para o template (nome, feito e excluir)
export function List(props) {
  const {tasks} = props;

  return (
    <div>
    {tasks.map(task => {
      return(
        <li>
          <> {task} </>
          <button>Feito</button>
          <button>Excluir</button>
        </li>
      )
    })} 
    </div>
  );
}
