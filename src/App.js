import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todo, setTodo] = useState('')
  const [todoArr, settodoArr] = useState([])
  const [todoEdited, settodoEdited] = useState(false)
  

const handleInputField = (e) => {
  const { value } = e.target;
    console.log(value)
    setTodo(value)
}
  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(value)
    setTodo(value)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    settodoArr([...todoArr,todo])
  }
  const handleDelete = (todo) =>{
    let todos = todoArr.filter((el) => el !== todo)
    settodoArr(todos)
  }
  const handleUpdate = (todoEl , index) => {
    settodoEdited(true)
    const todo = todoArr.find((todo => todo === todoEl) )
    console.log(todo)
    // todo[index] = 
  }

  // console.log(todoArr)
  return (
    <div className="App">
      <Header />
      <AddTodo todo={todo} handleChange={handleChange} addTodo={handleAdd} />
      <TodoList todoArr={todoArr} handleDelete = {handleDelete} handleUpdate = {handleUpdate} handleInputField = {handleInputField} todoEdited = {todoEdited} settodoEdited = {settodoEdited}/>
    </div>
  );
}

export default App;
