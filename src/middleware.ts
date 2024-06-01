
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const cookies = request.cookies.get('next-auth.session-token');

  if (cookies && cookies?.value) {
      return response;
  }

  response = NextResponse.redirect(
    new URL("/api/auth/signin", request.url)
  );
}

export const config = {
  matcher: "/",
};
