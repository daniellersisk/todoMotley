import React from 'react'


const Todo = ({text, key, setTodos, todos ,todo})=> {
 const deleteHandler = () => { // removes a todo
   setTodos(todos.filter(element => element.id !== todo.id)) // setTodos iterates through ll todos looking for a specific todoID
 }
 const completeHandler = () =>{  // marks todos complete that have been clicked 
     setTodos(todos.map((item) => {
         if(item.id === todo.id){ // looking for id of client click to match one of the ids in the list
             return {
            ...item, completed: !item.completed // changing the status of completion here
             }
         }
         return item; 
     }))
     
 }
    return(
    <div className="todo">
    <li key={key} className={`todo-item ${todo.completed ? "completed" : "" }`}> {text} </li>
    <button onClick={completeHandler} className="complete-btn"> 
    <i className="fas fa-check"></i> Completed
    </button>
    <button onClick={deleteHandler} className="trash-btn">
      <i className="fas fa-trash">   Delete
      </i>
    </button>
    </div>

    );

}
 
export default Todo; 