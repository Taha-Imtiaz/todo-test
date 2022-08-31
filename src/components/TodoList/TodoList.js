import React, { Fragment } from 'react'

const TodoList = ({ todoArr, handleDelete, todoEdited,handleUpdate, handleInputField }) => {
    console.log(todoArr)
    return (
        <>
        {/* <h1>Todo List</h1> */}
            {todoArr.length > 0 && todoArr?.map((todo, i) => 
               <div className='row'>
                 <div key={i} className = "col-9">
                  {todoEdited ? 
                 <input type="text" value={todo} onChange = {handleInputField}></input>
                 :  <h1>{todo}</h1>}
                    

                </div>
                <div className='col-1'>
               { todoEdited ? <button type="button" class="btn btn-success" onClick = {() => handleUpdate(todo)} >Update </button>: <button type="button" class="btn btn-success" onClick = {() => handleUpdate(todo)} >Edit </button>}
                </div>
                <div className='col-1'>
                <button type="button" class="btn btn-danger" onClick={() => handleDelete(todo)}>Delete </button>

                </div>
               </div>
            )}
        </>
    )
}

export default TodoList