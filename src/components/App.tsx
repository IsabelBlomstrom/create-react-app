import React, { FormEvent, ChangeEvent, useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Todo } from "./Todo";


const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todoValue, setTodoValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos(previousTodos => [
      ...previousTodos,
      {
        task: todoValue,
        finished: false
      }
    ]);
    setTodoValue("")
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoList todos={todos} />
      <TodoForm onSubmit={handleSubmit} 
      onInputChange={handleChange}
      inputValue={todoValue}/>
    </div>
  );
}

export default App;
