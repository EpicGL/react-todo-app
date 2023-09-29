import React from 'react'
import TodoEditForm from './TodoEditForm'
const TodoItem = ({ todo, toggleComlete, deleteTodo, editeTodo}) => {
  const trimtask = (value) => {
    const newvalue = value.task
    if (newvalue.length >= 50) {
      return newvalue.slice(1, 50) + '...'
    } else {
      return newvalue
    }
  }

  const setcomplete = () => {
    try {
    toggleComlete(todo.id) }
    catch { console.log('error on item') }
    
  }

  return (
    <li  className='list-item shadow d-flex justify-content-between align-items-center'>
      <p onClick={() => setcomplete()} className={`${todo.completed ? 'item-complete' : ''}`}> {trimtask(todo)} </p>
      <div className='d-flex justify-content-around'>
        <div onClick={() => editeTodo(todo.id)} className='list-item-icon'>edit</div>
        <div onClick={() => deleteTodo(todo.id)} className='list-item-icon'>delete</div>
      </div>
    </li>
  )
}

export default TodoItem