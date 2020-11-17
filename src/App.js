import './App.css';
import React, { useState , useEffect } from 'react';
import Form from "./components/Form.js";
import Todolist from "./components/Todolist";

function App() {

  


  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
        break;  

    }
  },[todos,status])



  

  return (
    <div className="App">
      <header>
        <h1>To-do list</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
       />
      <Todolist setTodos={setTodos} todos={filteredTodos} />
    </div>
  );
}

export default App;
