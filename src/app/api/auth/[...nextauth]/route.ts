import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const {
  GOOGLE_CLIENT_ID: clientId = "",
  GOOGLE_CLIENT_SECRET: clientSecret = "",
} = process.env;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  callbacks: {
    signIn({ user }) {

      console.log({user})
      return true;
    },
  },
});

export { handler as GET, handler as POST };
