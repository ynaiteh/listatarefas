import React, {useState} from "react";

//mapear cada item que tenho lista para o template (nome e excluir)
export default function List(props) {
 const {tasks} = props;

 return (
   <div>
   {tasks.map((task, index) => {
     return(
       <li className="task-card" key={index}>
         <> {task} </>
         <button onClick={() => props.deleteTask(index)}>×</button>
       </li>
     )
   })} 
   </div>
 );
}
