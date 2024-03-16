"use server";

import { todosTable } from "./schema";
import getDatabase from "./db";

export const fetchTodoList = async () => {
  const db = await getDatabase();
  return await db.select().from(todosTable).orderBy(todosTable.created_at);
};
