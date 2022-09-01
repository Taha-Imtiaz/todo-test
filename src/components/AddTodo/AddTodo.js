import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  // change of addInput
  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };
  return (
    <form>
      <div className="row m-2">
        <div className="col-9">
          <div className="form-group">
            <input
              type="text"
              value={todo}
              onChange={handleChange}
              className="form-control"
              placeholder="Add Todo"
            />
          </div>
        </div>
        <div className="col-3">
          <button type="button" onClick={() =>{
            const todoObj = {
              todo, 
              isEdit: false
            }
            addTodo( todoObj)
          }} className="btn btn-primary">
            Add{" "}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
