ALTER TABLE "sessions" ALTER COLUMN "userId" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "created_at" SET DEFAULT 'Wed May 29 2024 22:43:00 GMT-0400 (Atlantic Standard Time)';--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "user" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "emailVerified" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "timestamp2" timestamp DEFAULT now() NOT NULL;