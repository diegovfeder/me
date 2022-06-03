import React from "react";

const mockTodos = [
  {
    id: 1,
    text: "Learn React",
    completed: true,
  },
  {
    id: 2,

    text: "Learn Redux",
    completed: false,
  },
  {
    id: 3,
    text: "Learn React Native",
    completed: false,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input value={input} onChange={handleChange}></input>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
        <li>Buy milk</li>
        <li>Go to the gym</li>
        <li>Go to the gym</li>
        <li>Go to the gym</li>
      </ul>
    </div>
  );
};

export default TodoList;

const domContainer = document.querySelector("#todo_list_container");
ReactDOM.render(e(TodoList), domContainer);
