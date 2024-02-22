"use client";

import { useState } from "react";
import TodoItem from "./ui/todo-item";
import initialTodos, { Todo } from "./lib/inital-todos";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const onAddTodo = () => {
    setTodos((prev) => [...prev, { id: 3, text: todoText, checked: false }]);
    setTodoText("");
  };

  const onCheckTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(event.target.id);
  };

  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-lg">Todo app</h1>
      <div className="add-todo-text">
        <input
          type="text"
          className="h-[30px]"
          placeholder="TODO text"
          value={todoText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTodoText(event.target.value)
          }
        />
        <button
          type="button"
          onClick={onAddTodo}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1 disabled:bg-gray-300 disabled:cursor-not-allowed`}
          disabled={todoText.trim() === ""}
        >
          Add
        </button>
      </div>
      <div className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <TodoItem key={i} data={todo} onCheckTodo={onCheckTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
