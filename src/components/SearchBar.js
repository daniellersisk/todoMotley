import React from "react";
import Todo from "./Todo"

const SearchBar = ({ // props needed from app level state
  setSearchedTodos,
  searchedTodos,
  searchInputClientText,
  setSearchInputText,
  todos,
}) => {
  const SearchBarTextHandler = (e) => { // sets the client input text onchange 
    setSearchInputText(e.target.value);
  };
    const SearchBarSubmitHandler = (e) =>{
        e.preventDefault()
        let query = e.target.value.toLowerCase() // client search submission
         if(!query){
             setSearchedTodos(todos)
         }
          let newSearchedTodos = todos.filter((todo)=>{ // checking if each todo contains client query
              const todoName = todo.text.toLowerCase();
              return todoName.includes(query) // if so, return it, if not, dont include 
          })
          setSearchedTodos(newSearchedTodos) // setting state of searched todos to the result of the search
    }
    const resetSearchBar = ()=>{ // resetting seach bar back to all todos
        setSearchedTodos(todos)
    }
  return (
    <form>
      <label htmlFor="header-search"></label>
      <input
        onChange={SearchBarTextHandler}
        type="text"
        id="header-search"
        placeholder="Search todos here"
      />
      <button onClick={SearchBarSubmitHandler} value={searchInputClientText} type="submit">
        Search
      </button>
      <button onClick={resetSearchBar} type="submit">
        Reset Search
      </button>
      <ul className="todo-list"> 
      {searchedTodos.map(searchedTodo =>( // using the todo component for better display of the searchedtodos 
       <Todo setTodos={setSearchedTodos} todos={todos} todo={searchedTodo} text={searchedTodo.text} key={searchedTodo.id} />
      ))}
      </ul>
    </form>
  );
};

export default SearchBar;
