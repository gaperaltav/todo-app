import { sql } from "drizzle-orm";
import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp
} from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  text: text("description").notNull(),
  checked: boolean("checked").notNull().default(false),
  created_at: text("created_at").notNull().default(new Date().toString()),
  deleted_at: text("deleted_at"),
  userId: text("user").references(() => users.id, { onDelete: "cascade" }),
  dueDate: text("due_date"),
});

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  createdDate: timestamp("timestamp2", { mode: "string" })
    .notNull()
    .default(sql`now()`),
});

export const sessions = pgTable("sessions", {
  id: serial("id").primaryKey(),
  sessionToken: text("sessionToken").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});
