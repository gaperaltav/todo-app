import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "@/db";
import { Adapter } from "next-auth/adapters";

const {
  GOOGLE_CLIENT_ID: clientId = "",
  GOOGLE_CLIENT_SECRET: clientSecret = "",
} = process.env;

const handlers = NextAuth({
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  session: {
    strategy: "database",
  },
  callbacks: {
    async signIn() {
      return true;
    },
    redirect({ baseUrl }) {
      return baseUrl;
    },
    session({ session, user }) {
      session.user = user;
      console.log({ session, user });
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
