"use client";

import { useEffect, useState } from "react";
import TodoItem from "./ui/todo-item";
import { fetchTodoList } from "@/db/actions";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>();

  const getTodoList = async () => await fetchTodoList();

  useEffect(() => {
    getTodoList().then((data) => setTodos(data));
  }, []);

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
            onClick={() => {}}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1 disabled:bg-gray-300 disabled:cursor-not-allowed`}
            disabled={todoText.trim() === ""}
          >
            Add
          </button>
        </div>
        <div className="todo-list">
          <ul>
            {todos &&
              todos.map((todo, i) => (
                <TodoItem key={i} data={todo} onCheckTodo={() => {}} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
