"use server";

import { todosTable } from "./schema";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const connectionString = process.env.DATABASE_URL || "";
const client = postgres(connectionString, { prepare: false });

const db = drizzle(client);

export async function getDataBase() {
  return await db;
}

export  async function getTodosByUserId (userId: string) {
  return await db.select().from(todosTable).where(eq(todosTable.userId, userId)).orderBy(todosTable.created_at);
};

export async function createTodo(text: string, userId: string) {
  const newTodo = {
    checked: false,
    userId,
    text
  };
  return await db.insert(todosTable).values({ ...newTodo });
}

export async function checkTodo (id: number, value: boolean) {
  return await db
    .update(todosTable)
    .set({ checked: value })
    .where(eq(todosTable.id, id));
};

export async function deleteTodo (id: number) {
  await db.delete(todosTable).where(eq(todosTable.id, id));
}