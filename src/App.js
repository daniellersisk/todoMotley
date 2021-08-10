import './App.css';
import React,{ useState, useEffect } from "react"
import Form from './components/Form'
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBar'
// create a search bar component file and create an inout field for the search bar in the component  
// create a state for searched todos in App.js
// in search component onsubmit, call the search function to use input text state of the search bar and filters/checks through the vals in todos array 
//if any of them include or are equal to the input the search text then add them to the search array 
// display searched state 

  function App() {
    // app level state
    //When we declare a state variable with useState, it returns a pair — an array with two items. The first item is the current value, and the second is a function that lets us update it.
    const [inputText, setInputText] = useState("");  
    const [todos, setTodos] = useState([]) 
    const [status, setStatus] = useState("all"); 
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [searchInputClientText, setSearchInputText] = useState(""); 
    const [searchedTodos, setSearchedTodos] = useState([]);
  
// will run when the state of todos or status changes, given useEffect 
// determines which version of the todo list is rendered in the todolist component
  const filterHandler = () =>{
  switch(status){
    case 'completed': setFilteredTodos(todos.filter(todo => todo.completed === true)); 
    break; 
    case 'uncompleted': setFilteredTodos(todos.filter(todo => todo.completed === false)); 
    break; 
    default: setFilteredTodos(todos); 
    break; 
  }
  }
  useEffect(() =>{ // runs when the app starts up 
    getLocalTodos();
  }, []);

  useEffect(()=> { // checks for stats changes in todos or ststus and will run the following methods when state change happens 
    filterHandler(); // sets filtred todos based on completion status determined by event click 
    saveLocalTodos();
  }, [todos, status]);



  // saving to local storage 
  const saveLocalTodos = () =>{ // runs each time the state of todos or the status of completion updates
     localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodos = () =>{ // runs once when the app starts up, think of this as a hashmap lookup table 
    if(localStorage.getItem('todos') === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    } 
   }
   
  return (
    <div className="App">
      <header>
         <h1> Danielle's Todo List</h1>
      </header>
      <SearchBar setSearchedTodos={setSearchedTodos} searchedTodos={searchedTodos} setSearchInputText={setSearchInputText} searchInputClientText={searchInputClientText} todos={todos}/>
      <Form setStatus={setStatus} setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>

    </div>
  );
}

export default App;
