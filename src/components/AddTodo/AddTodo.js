import React from 'react'

const AddTodo = ({todo, addTodo, handleChange}) => {
  return (
    <form onSubmit={ addTodo}>
   <div className='row container my-2' >
    <div
    className='col-9'>
         <div class="form-group">
      <input type="text" onChange={handleChange} class="form-control"  placeholder="Add Todo"/>
    </div>
 
    </div>
    <div className='col-3'>
    <button type="submit" class="btn btn-primary" >Add </button>

    </div>
  </div>
  </form>
  )
}

export default AddTodo