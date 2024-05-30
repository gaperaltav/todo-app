"use client";
import {
  checkTodo,
  deleteTodo,
  getTodosByUserId,
} from "@/db/actions";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import TodoItem from "./todo-item";
import Image from "next/image";
import AddTodoCard from "./add-todo-card";

export default function TodoList() {
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
    checkTodo(id, value).then((todo) => {
      const updateTodos: Todo[] = [...(todos || [])];
      const index = updateTodos.findIndex((t) => t.id === id);
      updateTodos[index] = {
        ...updateTodos[index],
        checked: todo[0].checked,
      };
      setTodos(updateTodos);
    });
  };

  const deleteTodoHandler = async (id: number) => {
    deleteTodo(id).then(() => {
      setTodos((todos) => todos?.filter((todo) => todo.id !== id));
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
       <AddTodoCard userId={userId} updateTodos={getTodos} />
        <div className="todo-list">
          {loading && (
            <div className="flex justify-center mt-2">
              <Image
                src={`/icons/ring-loading.svg`}
                alt="loading"
                width="35"
                height="35"
              />
            </div>
          )}
          {!loading && todos && (
            <ul>
              {todos.map((todo, i) => (
                <TodoItem
                  key={todo.id}
                  data={todo}
                  onCheckTodo={(id, value) => checkTodoHandler(id, value)}
                  onDeleteTodo={(id) => deleteTodoHandler(id)}
                  className={i === 0 ? '!mt-3' : ''}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
