import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { todosTable } from "./schema";

//TODO: set for diffents envs
dotenv.config({ path: __dirname + "/../../.env.local" });

const intialTodos: (typeof todosTable.$inferInsert)[] = [
  {
    checked: false,
    text: "Learn about Drizzle",
  },
  {
    checked: true,
    text: "Build a fullstack app with Drizzle",
  },
  {
    checked: false,
    text: "Profit",
  },
];

const mainSeed = async () => {
  const client = postgres(process.env.DATABASE_URL!);
  const database = drizzle(client);

  await database.insert(todosTable).values(intialTodos);
};

mainSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Seeding complete!");
    process.exit(0);
  });

