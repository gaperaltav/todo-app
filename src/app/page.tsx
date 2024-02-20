"use client";

import { useState } from "react";
import TodoItem from "./ui/todo-item";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<{ text: string; checked: boolean }[]>([]);

  const onAddTodo = () => {
    setTodos((prev) => [...prev, { text: todoText, checked: false }]);
    setTodoText("");
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
            <TodoItem key={i} text={todo.text} checked={todo.checked} />
          ))}
        </ul>
      </div>
    </div>
  );
}
