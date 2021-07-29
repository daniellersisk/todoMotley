import React from "react";
import Todo from "./Todo"

const TodoList = ({todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list"> 
      {filteredTodos.map(todo =>( // creating a series of todos by mapping through the todolist one at a time and passing props to the todo component
       <Todo setTodos={setTodos} todos={todos} todo={todo} text={todo.text} key={todo.id} />
      ))}
      </ul>
    </div>
  );
};

export default TodoList