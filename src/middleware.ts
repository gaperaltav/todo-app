import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.has("user_id");
  let response = NextResponse.next();
  if (!session) {
    response = NextResponse.redirect(
      new URL("/api/auth/signin", request.url)
    );
  }
  return response;
}

export const config = {
  matcher: "/",
};
