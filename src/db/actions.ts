"use server";

import db from ".";
import { todosTable } from "./schema";
import { desc, eq } from "drizzle-orm";

export  async function getTodosByUserId (userId: string) {
  return await db.select().from(todosTable).where(eq(todosTable.userId, userId)).orderBy(desc(todosTable.id));
};

export async function createTodo(text: string, userId: string,  dueDate?: Date ) {
 const newTodo = {
    checked: false,
    userId,
    text,
    dueDate
  };
  
  return await db.insert(todosTable).values({ ...newTodo });
}

export async function checkTodo (id: number, value: boolean) {
  return await db
    .update(todosTable)
    .set({ checked: value })
    .where(eq(todosTable.id, id))
    .returning();
};

export async function deleteTodo (id: number) {
  await db.delete(todosTable).where(eq(todosTable.id, id));
}