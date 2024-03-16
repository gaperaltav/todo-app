import { pgTable, serial, text, boolean } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  text: text("description").notNull(),
  checked: boolean("checked").notNull().default(false),
  created_at: text("created_at").notNull().default("now()"),
  deleted_at: text("deleted_at"),
});
