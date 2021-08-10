import React from "react";

// this is where the input text for the add/update todos form is handled - it takes props from the application state in App.js 
const Form = ({ setStatus, setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => { // onchange to set InputText 
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => { // submitHandler for onclick that adds todo
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) =>{ // sets the status to all, complete or incomplete based on the list item choice
    setStatus(e.target.value) // usesstet ain app.js determoines when to rub nthe filter sttaus function in app.js 
    
  }
  return (
    <form>
      <input
        value={inputText}
        type="text"
        onChange={inputTextHandler}
        className="todo-input"
        placeholder="Add todos here"

      />
    
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i> Add
      </button>
      
      <div onChange={statusHandler}className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
