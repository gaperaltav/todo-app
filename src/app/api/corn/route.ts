import db from "@/db";
import { todosTable, users } from "@/db/schema";
import { eq, lte } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { sendPendingTodoEmail } from "./email-helper";

export async function GET(request: NextRequest) {
  try {
    const todosToNotify = await db
      .selectDistinctOn([users.id])
      .from(todosTable)
      .innerJoin(users, eq(todosTable.userId, users.id))
      .where(lte(todosTable.dueDate, new Date()));

    if (todosToNotify && todosToNotify.length > 0) {
      const emailNotifications = todosToNotify.map(async (data) => {
        const {
          user: { email, name },
        } = data;

        return await sendPendingTodoEmail(email, name);
      });

      Promise.all(emailNotifications);
    }
  } catch (error) {
    console.log("Error sending email notifications ");
  }

  return NextResponse.json(
    { body: "Emails sent correctly" },
    {
      status: 200,
    }
  );
}
