"use client";

import { useState } from "react";
import TodoItem from "./ui/todo-item";

const INTIAL_DATA: Todo[] = [
  { id: 1, text: "Learn React", checked: false },
  { id: 2, text: "Learn Next.js", checked: false },
  { id: 3, text: "Build something", checked: false },
];

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => INTIAL_DATA);

  const onAddTodo = () => {
    const nextId = Math.max(...todos.map((todo) => todo.id)) +1;
    setTodos((prev) => [...prev, { id: nextId, text: todoText, checked: false }]);
    setTodoText("");
  };

  const onCheckTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      checked: todo.id === id ? !todo.checked : todo.checked,
    }));
    setTodos(updatedTodos);
  };

  return (
    <div className="flex w-[100%] justify-center ">
      <div className="flex flex-col">
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
    </div>
  );
}
