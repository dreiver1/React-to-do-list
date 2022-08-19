
import  React, { useState } from 'react';
import { PrimaryState } from './PrymaryState';

function ToDoForm (){
    const [tasks, setTask] = useState(PrimaryState)
    const PostTask = ()=>{
        const task = {
            id: document.getElementById('id').value,
            description: document.getElementById('description').value
          }
          setTask([...tasks, {...task}])
          console.log(tasks)
    }
    return(
        
        <div className='conteiner'>
            <div className='my-form'>
                <div className='item-my-form'>
                    <form>
                        <div className="row">
                            <div className="col">
                                <input id='id' type="text" className="form-control" placeholder='id'/>
                            </div>
                            <div className="col">
                                <input id='description' type="text" className="form-control" placeholder='description'/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='item-my-form'>
                    <button onClick={PostTask} class="btn btn-secondary">Adicionar</button>
                </div>
            </div>
            <p class="card-text">
            {tasks.map(Task => (
                <div className="my-cards">
                    <div className="card mb-2" style={{width: "18rem"}}>
                        <div class="card-body">
                            <li key={Task.id} className='list-group-item'>{Task.id} - {Task.description}</li>
                            <a href={{link: "#"}} className="card-link">Card link</a>
                            <a href={{link:"#"}} className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
                ))}
            </p>
        </div>

    )
}

export default ToDoForm;