import './Todo.css'

const Todo = ({todo, id, removeTodo, "data-testid": testId,}) => {
  return(
    <div className="Todo-todo" data-testid={testId}>
      <p>{todo}</p>
      <button className='Todo-btn' onClick={() => removeTodo(id)}>x</button>
    </div>
  )
}

export default Todo