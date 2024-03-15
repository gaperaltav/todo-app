"use server";

import { todosTable } from "./schema";
import getDatabase from "./db";

export const getTodoList = async () => {
    const db = await getDatabase();
  return await db.select().from(todosTable);
};
