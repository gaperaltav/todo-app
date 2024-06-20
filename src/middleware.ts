import { withAuth } from "next-auth/middleware";
const env = process.env.NODE_ENV;

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      const { url } = req;

      if (url.includes("/api/corn")) {
        return true;
      }

      const cookieName =
        env === "development"
          ? "next-auth.session-token"
          : "__Secure-next-auth.session-token";
      const sessionCookie = req.cookies.get(cookieName);

      if (sessionCookie && sessionCookie.value !== "") {
        return true;
      }
      return false;
    },
  },
});
