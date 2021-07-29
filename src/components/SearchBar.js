import React from "react";
import Todo from "./Todo"

const SearchBar = ({
  setSearchedTodos,
  searchedTodos,
  searchInputClientText,
  setSearchInputText,
  todos,
}) => {
  const SearchBarTextHandler = (e) => {
    setSearchInputText(e.target.value);
  };
    const SearchBarSubmitHandler = (e) =>{
        e.preventDefault()
        let query = e.target.value.toLowerCase() // client search submissio
         if(!query){
             setSearchedTodos(todos)
         }
          let newSearchedTodos = todos.filter((todo)=>{
              const todoName = todo.text.toLowerCase();
              return todoName.includes(query)
          })
          setSearchedTodos(newSearchedTodos)
    }
//STOPPED HERE 
    const resetSearchBar = ()=>{
        console.log(todos)
        setSearchedTodos(todos)
    }
  // need input text handler method for this form
  // need submit handler that maps trhough the todos and checks for vals and sets the searchbar state equal to the result
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
      {searchedTodos.map(searchedTodo =>(
       <Todo setTodos={setSearchedTodos} todos={todos} todo={searchedTodo} text={searchedTodo.text} key={searchedTodo.id} />
      ))}
      </ul>
    </form>
  );
};

export default SearchBar;
