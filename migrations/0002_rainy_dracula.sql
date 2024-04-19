ALTER TABLE "todos" DROP CONSTRAINT "todos_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "sessions" ALTER COLUMN "userId" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "created_at" SET DEFAULT 'Thu Apr 18 2024 19:52:40 GMT-0400 (Atlantic Standard Time)';--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "user" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "todos" ADD CONSTRAINT "todos_user_users_id_fk" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "todos" DROP COLUMN IF EXISTS "userId";