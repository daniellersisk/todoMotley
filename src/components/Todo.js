import React from 'react'


const Todo = ({text, key, setTodos, todos ,todo})=> {
  // ddont havr to pass in todo to the methods because the function has access to each todo as a prop on the todo item. 
 // each todo has the following methods available to them
  const deleteHandler = () => { // removes a todo
   setTodos(todos.filter(element => element.id !== todo.id)) // setTodos as lomg as todo id isnt equal to the currentodo
  }
 const completeHandler = () =>{  // checking to find the todo id that matched the current todo clicked 
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