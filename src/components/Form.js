import React, {useState} from "react";

export default function Form(props) {
 const {onSave} = props;

 const [text, setText] = useState("");
 return (
   <form onSubmit={e => e.preventDefault()}>
     <input type="text" 
       placeholder="Qual é a tarefa?" 
       class-name = "task-field"
       value={text || ""}
       onChange={e => setText(e.currentTarget.value)} />
     <button name="enviar" onClick={()=> {onSave(text); setText("");}}> Enviar </button>
   </form>
 );
}