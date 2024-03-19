"use server";

import { todosTable } from "./schema";
import getDatabase from "./db";
import { eq } from "drizzle-orm";

export const fetchTodoList = async () => {
  const db = await getDatabase();
  return await db.select().from(todosTable).orderBy(todosTable.created_at);
};


export const addTodo = async (text: string) => {
  const db = await getDatabase();
  const newTodo = {
     checked: false,
     text
    }
  return await db.insert(todosTable).values({ ...newTodo });;
};

export const checkTodo = async (id: number, value: boolean) => {
  const db = await getDatabase();
  return await db
    .update(todosTable)
    .set({ checked: value })
    .where(eq(todosTable.id, id));
};

export const deleteTodo = async (id: number) => {
  const db = await getDatabase();
  await db.delete(todosTable).where(eq(todosTable.id, id));
}
