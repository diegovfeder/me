// TODO: todoList
import React from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input value={input} onChange={handleChange}></input>
      <ul>
        {/* TODO: map todos return li with key */}
        <li>Buy milk</li>
        <li>Go to the gym</li>
        <li>Go to the gym</li>
        <li>Go to the gym</li>
      </ul>
    </div>
  )
}

export default TodoList;
