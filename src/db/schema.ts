import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  text: text("description").notNull(),
  checked: boolean("checked").notNull().default(false),
  created_at: text("created_at").notNull().default(new Date().toString()),
  deleted_at: text("deleted_at"),
  userId: text("userId").references(() => users.id, { onDelete: "cascade" }),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  image: text("image"),
});

export const sessions = pgTable("sessions", {
  id: serial("id").primaryKey(),
  sessionToken: text("sessionToken").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});
