import {useState} from 'react'
import NewTodoForm from './NewTodoForm'
import {v4 as uuid} from "uuid"
import Todo from './Todo'
import './TodoList.css'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (formData) =>{
    let newTodo = {...formData, id: uuid()}
    setTodos((todos) => [...todos, newTodo])
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return(
    <div className='TodoList-main'>
      <div>
        <NewTodoForm addTodo={addTodo} />
        <div className='TodoList-List'>
          <h1>Todo List</h1>
          <ul>
            {todos.map((todo, idx) => {
              return(
                <li  className='TodoList-li' key={idx}>
                  <Todo 
                    id={todo.id}
                    removeTodo={removeTodo}
                    todo={todo.todo}
                    data-testid={`todo-${idx}`}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList