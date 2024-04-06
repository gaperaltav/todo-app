"use client";

import { checkTodo, createTodo, deleteTodo, fetchTodoList } from "@/db/actions";
import { useEffect, useState } from "react";
import TodoItem from "./todo-item";
import { useCookies } from "react-cookie";

export function TodoList() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>();
  const [loading, setLoading] = useState(true);
  const [cookie] = useCookies(["user_id"]);
  const { user_id: userId } = cookie;

  const refetchTodoList = async () => {
    setLoading(true);
    fetchTodoList(userId).then((data) => {
      setTodos(data);
      setLoading(false);
    });
  };

  const checkTodoHandler = async (id: number, value: boolean) => {
    setLoading(true);
    checkTodo(id, value).then(() => refetchTodoList());
  };

  const deleteTodoHandler = async (id: number) => {
    deleteTodo(id).then(() => refetchTodoList());
  };

  const addTodoHandler = async () =>
    createTodo(todoText, userId).then(() => {
      setTodoText("");
      refetchTodoList();
    });

  useEffect(() => {
    refetchTodoList();
  }, []);

  return (
    <div className="flex w-[100%] justify-center ">
      <div className="flex flex-col">
        <h1 className="text-lg">Todo app</h1>
        <div className="add-todo-text">
          <input
            type="text"
            className="h-[30px] w-[350px]"
            placeholder="TODO text"
            value={todoText}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTodoText(event.target.value)
            }
          />
          <button
            type="button"
            onClick={addTodoHandler}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1 disabled:bg-gray-300 disabled:cursor-not-allowed`}
            disabled={todoText.trim() === ""}
          >
            Add
          </button>
        </div>
        <div className="todo-list">
          {loading && <div>Loading...</div>}
          {!loading && todos && (
            <ul>
              {todos.map((todo, i) => (
                <TodoItem
                  key={i}
                  data={todo}
                  onCheckTodo={(id, value) => checkTodoHandler(id, value)}
                  onDeleteTodo={(id) => deleteTodoHandler(id)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
