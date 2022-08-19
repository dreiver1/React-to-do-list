import React, { useState } from 'react';
import './App.css';

const initialState = [
  {
    id: 1,
    description: "Primary task",
  },
  {
    id: 2,
    description: "Secundary task",
  }
]

function App() {
  const [tasks, setTask]  = useState(initialState);

  function postTask(event) {
    event.preventDefault();
    const toDo = {
      id: document.getElementById('id').value,
      description: document.getElementById('description').value
    }
    // tasks.push(toDo); 
    setTask([...tasks, {...toDo}]);
    console.log(tasks)
  }

  return (
    <div className="conteiner">
     <h1>To-do-list</h1> 
     <form>
        <input id='id' type="text" placeholder='id'/>
        <input id='description' type="text" placeholder='description'/>
        <button onClick={postTask}>Adicionar</button>
     </form>
     <div className='conteiner'>
        <ul className='list-group'>
          {tasks.map(task => (
            <li key={task.id} className='list-group-item'>{task.id} - {task.description}</li>
          ))}
        </ul>
     </div>
    </div>
  );
}

export default App;
