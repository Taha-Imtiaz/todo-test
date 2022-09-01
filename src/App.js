import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todoArr, settodoArr] = useState([]);

  const handleInputField = (e, index) => {
    const { value } = e.target;
    let todoClone = [...todoArr];
    todoClone[index].todo = value;
    settodoArr(todoClone);
  };

  const handleUpdate = (index) => {
    let todoClone = [...todoArr];
    todoClone[index].isEdit = false;
    settodoArr(todoClone);
  };
  const handleEdit = (index) => {
    let todoClone = [...todoArr];
    todoClone[index].isEdit = true;
    settodoArr(todoClone);
  };
  // handler of Add Btn
  const handleAdd = (todoObj) => {
   

    const todoClone = [...todoArr];
   
    settodoArr([...todoClone, todoObj]);
  };
  // handler of delete todo
  const handleDelete = (todo) => {
    let todos = todoArr.filter((el) => el.todo !== todo);
    settodoArr(todos);
  };

  console.log(todoArr);
  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={handleAdd} />
      <TodoList
        todoArr={todoArr}
        handleDelete={handleDelete}
        handleInputField={handleInputField}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
