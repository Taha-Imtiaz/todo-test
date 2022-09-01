import React from "react";

const TodoList = ({
  todoArr,
  handleDelete,
  handleInputField,
  handleUpdate,
  handleEdit,
}) => {
  console.log(todoArr);
  return (
    <>
      { todoArr && todoArr.length >0 &&
        todoArr.map((todo, i) => (
          <div className="row m-2" key={i}>
            <div className="col-9 my-2">
              {todo.isEdit ? (
                <input
                  type="text"
                  className="form-control"
                  value={todo.todo}
                  onChange={(e) => handleInputField(e, i)}
                ></input>
              ) : (
                <h1>{todo.todo}</h1>
              )}
            </div>
            <div className="col-1">
              {todo.isEdit ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() =>handleUpdate(i)}
                >
                  Update{" "}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() =>handleEdit(i)}
                >
                  Edit{" "}
                </button>
              )}
            </div>
            <div className="col-1">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(todo.todo)}
              >
                Delete{" "}
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default TodoList;
