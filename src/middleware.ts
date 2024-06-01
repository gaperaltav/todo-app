import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
const env = process.env.NODE_ENV;

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      const cookieName =
        env === "development"
          ? "next-auth.session-token"
          : "__Secure-next-auth.session-token";
      const sessionCookie = req.cookies.get(cookieName);

      console.log({ sessionCookie });
      if (sessionCookie && sessionCookie.value !== "") {
        return true;
      }
      return false;
    },
  },
});
