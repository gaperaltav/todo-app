"use client";
import { cookies } from "next/headers";
import { TodoList } from "./todo-list/page";
import { useCookies } from "react-cookie";

export default function Home() {
  const [cookie] = useCookies(['user_id'])

console.log({ user: cookie.user_id})

  return  <TodoList />;
}
