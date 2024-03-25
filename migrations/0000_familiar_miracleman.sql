CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"checked" boolean DEFAULT false NOT NULL,
	"created_at" text DEFAULT 'now()' NOT NULL,
	"deleted_at" text
);
