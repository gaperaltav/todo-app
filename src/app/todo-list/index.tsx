"use client";
import { checkTodo, createTodo, deleteTodo, getTodosByUserId } from "@/db/actions";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import TodoItem from "./todo-item";

export default function TodoList() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>();
  const [loading, setLoading] = useState(true);
  const [cookie] = useCookies(["user_id"]);

  const { user_id: userId } = cookie;

  const getTodos = async () => {
    setLoading(true);
    getTodosByUserId(userId).then((data) => {
      setTodos(data);
      setLoading(false);
    });
  };

  const checkTodoHandler = async (id: number, value: boolean) => {
    setLoading(true);
    checkTodo(id, value).then(() => getTodos());
  };

  const deleteTodoHandler = async (id: number) => {
    deleteTodo(id).then(() => getTodos());
  };

  const addTodoHandler = async () =>
    createTodo(todoText, userId).then(() => {
      setTodoText("");
      getTodos();
    });

  useEffect(() => {
    getTodos()
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="add-todo-text">
          <input
            type="text"
            className="h-[35px] w-[480px] max-md:w-64  border-[1px] border-[#808080] rounded"
            placeholder=" Insert your todo's text"
            value={todoText}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTodoText(event.target.value)
            }
          />
          <button
            type="button"
            onClick={addTodoHandler}
            className={`bg-blue-500 h-[35px] hover:bg-blue-700 w-20 max-md:w-15 text-white font-bold py-1 px-2 rounded mx-1 disabled:bg-gray-300 disabled:cursor-not-allowed`}
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
