import React, { useState } from 'react'

const TodoEditForm = ({editTodo, todo}) => {
  const [value, setValue] = useState(todo.task)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const tInput = value.replace(/ +/g, "");
    if (tInput.length !== 0) {
      editTodo(value, todo.id)
      setValue('')
    } else {
      alert('There is no test to submit')
    }
  }

  return (
    <form className='d-flex' onSubmit={handleSubmit}>
      <input className='form-control'
        type="text" value={value}
        onChange={(e) =>{setValue(e.target.value)}}
        placeholder='Update Task' />
      <button className='btn btn-success ms-1' type="submit">Update</button>  
    </form>
  )
}

export default TodoEditForm