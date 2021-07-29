import React from 'react'


const Todo = ({text, key, setTodos, todos ,todo})=> {
 const deleteHandler = () => {
   setTodos(todos.filter(element => element.id !== todo.id)) // setting the state of todos with setTodos 
 }
 const completeHandler = () =>{
     setTodos(todos.map((item) => {
         if(item.id === todo.id){
             return {
            ...item, completed: !item.completed
             }
         }
         return item; 
     }))
     
 }
    return(
    <div className="todo">
    <li key={key} className={`todo-item ${todo.completed ? "completed" : "" }`}> {text} </li>
    <button onClick={completeHandler} className="complete-btn"> 
    <i className="fas fa-check"></i>
    </button>
    <button onClick={deleteHandler} className="trash-btn">
      <i className="fas fa-trash">    
      </i>
    </button>
    </div>

    );

}
 
export default Todo; 