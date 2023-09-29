import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, idEditable: false }])
    console.log(todos)
  }
  const getTodosList = () => {
    const getTodos = JSON.parse(localStorage.getItem('todo'))
    if (getTodos !== null) {
      setTodos(getTodos)
      console.log('getting todo')
    }
  }

  const setTodosList = () => {
    if (todos.length !== 0) {
      const objs = JSON.stringify(todos)
      console.log(objs)      
      localStorage.setItem('todo', objs)
      console.log('setTodo')
    } else if (todos.length == 0) {
      localStorage.removeItem('todo')
    }
  }

  useEffect(() => {
    setTodosList()
  },[todos])


  useEffect(() => {
    getTodosList()
  },[])

  return (
    <div className=' container mt-5' >
      <div className="d-flex justify-content-center">
        <div>
        <div className="card p-3"  style={{width:'80vh'}}>
            <TodoForm addtodo={addTodo} />
            <hr/>
            <h5>ToDo List:</h5>

            <TodoList toDos={todos} setToDo={setTodos} />
        </div>
        </div>
      </div>

    </div>
  )
}

export default App
