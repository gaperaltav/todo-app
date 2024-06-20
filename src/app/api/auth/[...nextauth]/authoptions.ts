import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email"
import { cookies } from "next/headers";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "@/db";

const {
    GOOGLE_CLIENT_ID: clientId = "",
    GOOGLE_CLIENT_SECRET: clientSecret = "",
  } = process.env;
  

const authOptions: NextAuthOptions =  {
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
      GoogleProvider({
        clientId,
        clientSecret,
      }),
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: parseInt(process.env.EMAIL_SERVER_PORT!),
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          }
        },
        from: process.env.EMAIL_FROM
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
        return session;
      },
    
      jwt({ token }) {
        return token;
      },
    },
    events: {
      signOut() {
        cookies().delete("next-auth.session-token");
        cookies().delete("next-auth.csrf-token");
      },
    },
  }

export default authOptions