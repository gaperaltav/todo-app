"use server";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export default async function getDatabase() {
  const connectionString = process.env.DATABASE_URL || "";
  const client = postgres(connectionString);
  return drizzle(client);
};
