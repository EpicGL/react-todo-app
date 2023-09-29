import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import TodoEditForm from './TodoEditForm'

const TodoList = ({ toDos, setToDo }) => {

  const toggleComlete = (myid) => {
    try { 
      setToDo(toDos.map((todo) => todo.id === myid ? { ...todo, completed: !todo.completed } : todo))
    }
    catch{console.log('unknown error')}
  }
  const deleteit = (id) => {
    setToDo(toDos.filter(todo => todo.id !== id))
  }

  const editeit = (myid) => {
    setToDo(toDos.map((todo) => todo.id === myid ? { ...todo, idEditable: !todo.idEditable } : todo))
  }


  return (
    <ul style={{
      padding: "0px"
    }}>
      {toDos.map((toDo) => ( toDo.idEditable ? <TodoEditForm key={toDo.id} todo={toDo} /> :
        <TodoItem key={toDo.id} todo={toDo} toggleComlete={toggleComlete} deleteTodo={deleteit} editeTodo={editeit} />))}
    </ul>
  )
}

export default TodoList 