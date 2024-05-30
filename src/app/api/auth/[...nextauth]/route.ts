import { getDataBase } from "@/db/actions";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const {
  GOOGLE_CLIENT_ID: clientId = "",
  GOOGLE_CLIENT_SECRET: clientSecret = "",
} = process.env;

const handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const db = await getDataBase();
      let sessionUser: { id: string; name: string | null };
      const userExists = await db
        .select()
        .from(users)
        .where(eq(users.email, user.email!));

      if (userExists && userExists.length === 0) {
        const [added] = await db
          .insert(users)
          .values({ email: user.email!, name: user.name, image: user.image })
          .returning();
        sessionUser = added;
      } else {
        sessionUser = userExists[0];
      }

      cookies().delete("user_id");
      cookies().set("user_id", sessionUser.id.toString());
      return true;
    },
    redirect({ baseUrl }) {
      return baseUrl;
    },
    session({ session }) {
      return session;
    },
    jwt({ token }) {
      return token;
    },
  },
  events: {
    signOut() {
      cookies().delete("user_id");
    },
  },
});

export { handlers as GET, handlers as POST };
