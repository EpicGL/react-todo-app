import React, { useState } from 'react'

const TodoForm = ({addtodo}) => {
  const [value, setValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const tInput = value.replace(/ +/g, "");
    if (tInput.length !== 0) {
      addtodo(value)
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
        placeholder='Add New ToDO' />
      <button className='btn btn-success ms-1' type="submit">Submit</button>  
    </form>
  )
}

export default TodoForm